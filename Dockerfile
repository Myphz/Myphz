FROM rust:latest as builder

WORKDIR /usr/src/app
COPY . .
# Build Frontend
RUN bash ./build.sh
# Will build and cache the binary and dependent crates in release mode
RUN --mount=type=cache,target=/usr/local/cargo,from=rust:latest,source=/usr/local/cargo \
    --mount=type=cache,target=target \
    cargo build --release && mv ./target/release/devfolio_be ./server

# Runtime image
FROM debian:bullseye-slim

# Run as "app" user
RUN useradd -ms /bin/bash app

USER app
WORKDIR /app

# Get compiled binaries from builder's cargo install directory
COPY --from=builder /usr/src/app/server /app/server
# Copy frontend
COPY --from=builder /usr/src/app/static /app/static

# Run the app
CMD ./server