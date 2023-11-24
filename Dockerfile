FROM rust:bookworm as builder

WORKDIR /usr/src/app
COPY . .

# Will build and cache the binary and dependent crates in release mode
RUN --mount=type=cache,target=/usr/local/cargo,from=rust:latest,source=/usr/local/cargo \
    --mount=type=cache,target=target \
    cargo build --release && mv ./target/release/server ./server




FROM node:18 as builder-fe
WORKDIR /usr/src/appfe

RUN git clone -b redesign https://github.com/Myphz/Myphz.git .
# Invalidate Docker cache
ADD https://www.random.org/cgi-bin/randbyte?nbytes=10&format=h /tmp/bustcache
RUN git pull origin redesign
RUN npm i
RUN npm run build




# Runtime image
FROM debian:bookworm
ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install --no-install-recommends -y openssl


# Run as "app" user
RUN useradd -ms /bin/bash app

USER app
WORKDIR /app

# Get compiled binaries from builder's cargo install directory
COPY --from=builder /usr/src/app/server ./server
# Copy frontend
COPY --from=builder-fe /usr/src/appfe/dist ./static
# Run the app
CMD ./server