#[macro_use] extern crate rocket;

use dotenvy::dotenv;
use rocket::Request;
use rocket::serde::{json::Json, Deserialize, Serialize};
use rocket::http::{Status, Header};
use rocket::fairing::AdHoc;
use rocket::response::status;
use validator::Validate;
use rocket::fs::FileServer;
mod email;

#[derive(Deserialize, Validate)]
pub struct Params {
    #[validate(email)]
    email: String,
    subject: String,
    body: String
}

#[derive(Serialize)]
struct Response {
    success: bool,
    message: String
}

#[post("/email", data = "<data>")]
fn index(data: Json<Params>) -> status::Custom<Json<Response>> {
    let fields = data.into_inner();
    let is_valid = fields.validate();
    if is_valid.is_err() {
        return status::Custom(
            Status::BadRequest,
            Json(Response { success: false, message: String::from("Invalid email. Please retry.")})
        );
    };

    let success = email::send_email(fields);
    return if success {
        status::Custom(
            Status::Ok,
            Json(Response { success: true, message: String::from("Email sent! I'll reply back soon ;)")})
        )
    } else {
        status::Custom(
            Status::InternalServerError,
            Json(Response { success: false, message: String::from("Error sending the email. Please send the email manually.")})
        )
    }
}

#[catch(default)]
fn default_catcher(status: Status, _req: &Request) -> status::Custom<Json<Response>> {
    status::Custom(
        status,
        Json(Response { success: false, message: String::from("Unexpected error.")})
    )
}

#[launch]
fn rocket() -> _ {
    dotenv().ok();
    rocket::build()
    .mount("/", routes![index])
    .mount("/", FileServer::from("./static"))
    .register("/", catchers![default_catcher])
}