use crate::Params;
use lettre::transport::smtp::authentication::Credentials;
use lettre::{Message, SmtpTransport, Transport};
use std::error::Error;

fn get_env_var(key: &str) -> String {
    std::env::var(key).ok().unwrap()
}

fn log_and_exit<T: Error>(err: T) -> bool {
    println!("[ERROR]: {}", err);
    return false;
}

pub fn send_email(Params { email, subject, body}: Params) -> bool {
    let message = Message::builder()
        .from(get_env_var("CRED_EMAIL").parse().unwrap())
        .to(get_env_var("TO").parse().unwrap())
        .subject(format!("Portfolio - {} (from {})", subject, email))
        .body(body);

    let message = match message {
        Ok(msg) => msg,
        Err(err) => return log_and_exit(err)
    };

    let creds = Credentials::new(get_env_var("CRED_EMAIL"), get_env_var("CRED_PASSWORD"));

    let mailer = match SmtpTransport::starttls_relay("smtp.zoho.eu") {
        Ok(mail) => mail.credentials(creds).build(),
        Err(err) => return log_and_exit(err)
    };

    return match mailer.send(&message) {
        Ok(_) => true,
        Err(err) => log_and_exit(err)
    }
}