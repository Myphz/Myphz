#[macro_use] extern crate rocket;

use dotenvy::dotenv;
use rocket::serde::{json::Json, Deserialize, Serialize};
use rocket::http::Status;
use rocket::response::status;
use validator::Validate;

mod email;

#[derive(Deserialize, Validate)]
pub struct Params {
    #[validate(email)]
    email: String,
    subject: String,
    message: String
}

#[derive(Serialize)]
struct Response {
    success: bool,
    message: String
}

#[post("/", format = "json", data = "<data>")]
fn index(data: Json<Params>) -> status::Custom<Json<Response>> {
    let fields = data.into_inner();
    let is_valid = fields.validate();
    if is_valid.is_err() {
        return status::Custom(Status::BadRequest, Json(Response { success: false, message: String::from("Invalid email. Please retry.")}));
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

#[launch]
fn rocket() -> _ {
    dotenv().ok();
    rocket::build().mount("/", routes![index])
}