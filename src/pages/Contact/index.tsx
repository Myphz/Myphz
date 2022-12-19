import React, { FormEvent, useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Popup } from "../../components/Popup";
import { TypeText } from "../../components/TypeText";
import { SERVER_URL } from "../../config";
import "./style.sass"

interface Response {
  success?: boolean | null,
  message?: string
};

export const Contact: React.FC = () => {
  const [popupStatus, setPopupStatus] = useState<Response>({});
  const [popupKey, setPopupKey] = useState(0);

  useEffect(() => {
    const script1 = document.createElement("script");
    script1.text = `
      const mapElement = document.getElementById("gmaps");
      const trondheim = { lat: 63.43054, lng: 10.39482 };
      const center = { lat: 60.7374, lng: 10.4329 };

      const mapStyle = [
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 13
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#144b53"
                },
                {
                    "lightness": 14
                },
                {
                    "weight": 1.4
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#08304b"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#0c4152"
                },
                {
                    "lightness": 5
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#0b434f"
                },
                {
                    "lightness": 25
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#0b3d51"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#146474"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#021019"
                }
            ]
        }
      ];

      function initMap() {
        const styledMap = new google.maps.StyledMapType(mapStyle, { name: "Styled Map" });
        const map = new google.maps.Map(mapElement, { zoom: 5, center, mapTypeControl: false });
        map.mapTypes.set("Map", styledMap);
        map.setMapTypeId("Map");

        new google.maps.Marker({
          position: trondheim,
          map
        });
      }
    `;

    const script2 = document.createElement("script");
    script2.setAttribute("src", "https://maps.googleapis.com/maps/api/js?key=AIzaSyDLk5dv79VPSAIMd3Hgjgpgqu9-RokCz4I&callback=initMap");
    script2.setAttribute("defer", "");

    document.body.appendChild(script1);
    document.body.appendChild(script2);
  }, []);

  async function sendEmail(e: FormEvent) {
    e.preventDefault();
    const body = Object.fromEntries(new FormData(e.target as HTMLFormElement));
    if (Object.values(body).some(val => !val)) {
      setPopupKey(key => key+1);
      return setPopupStatus({ success: false, message: "Please enter all the required fields" });
    };

    setPopupStatus({ success: null, message: "Loading..."});
    setPopupKey(key => key+1);

    const res = await fetch(SERVER_URL, {
      method: "POST",
      body: JSON.stringify(body)
    });

    setPopupStatus(await res.json());
    setPopupKey(key => key+1);
  }

  return (
    <>
      <section className="flex-column justify-center">
        <h1 className="color-primary font-title block no-trail">
          <TypeText text="Contact" delay={200} speed={100} blinkDelay={50} />
        </h1>
        <section className="align-center contact-section-container">
          <section className="justify-center flex-column contact-main">
            <section className="input-section anim">
              <h4 className="block no-trail">
                My inbox is always open for new opportunities.<br />
                Feel free to contact me for any inquiries you may have!<br />
                Alternatively, you can send an email to <a href="mailto:danielscanu45@outlook.it" className="a-link">danielscanu45@outlook.it</a>
              </h4>
              <form className="input-form h4" onSubmit={sendEmail}>
                <div>
                  <input type="text" placeholder="Email" autoComplete="email" spellCheck="false" autoCapitalize="none" name="email" />
                  <span className="focus-border"></span>
                </div>
                <div>
                  <input type="text" placeholder="Subject" spellCheck="false" autoCapitalize="none" name="subject" />
                  <span className="focus-border"></span>
                </div>

                <div>
                  <textarea placeholder="Message" name="body" />
                  <span className="focus-border"></span>
                </div>

                <Button submit>Send Message</Button>
              </form>
            </section>
          </section>
          <div id="gmaps" className="anim"></div>
        </section>
      </section>
      <Popup {...popupStatus} key={popupKey} />
    </>
  );
}