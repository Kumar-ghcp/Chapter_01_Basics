# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout\checkout.spec.js >> End-to-end purchase >> @smoke @e2e Verify customer can purchase Grey Jacket successfully
- Location: sauce demo project\tests\checkout\checkout.spec.js:11:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('body')

```

# Page snapshot

```yaml
- generic [ref=f6e2]:
  - generic [ref=f6e4]:
    - status [ref=f6e5]
    - generic [ref=f6e6]:
      - generic [ref=f6e7]:
        - link "Skip to content" [ref=f6e8] [cursor=pointer]:
          - /url: "#checkout-main"
        - generic [ref=f6e9]:
          - banner [ref=f6e10]:
            - generic [ref=f6e15]:
              - link "Sauce Demo Navigate to Online Store" [ref=f6e17] [cursor=pointer]:
                - /url: https://sauce-demo.myshopify.com
                - generic: Sauce Demo
                - generic [ref=f6e18]: Navigate to Online Store
              - link "Cart" [ref=f6e20] [cursor=pointer]:
                - /url: https://sauce-demo.myshopify.com/cart
          - generic [ref=f6e24]:
            - generic [ref=f6e26]:
              - main [ref=f6e27]:
                - heading "Sauce Demo Checkout" [level=1] [ref=f6e28]
                - generic [ref=f6e30]:
                  - status [ref=f6e31]
                  - generic [ref=f6e32]:
                    - generic [ref=f6e33]:
                      - region "Contact" [ref=f6e34]:
                        - generic [ref=f6e38]:
                          - generic [ref=f6e39]:
                            - heading "Contact" [level=2] [ref=f6e40]
                            - link "Sign in" [ref=f6e41] [cursor=pointer]:
                              - /url: https://sauce-demo.myshopify.com/account/login?checkout_url=%2Fcheckouts%2Fcn%2FhWNHClKGMyDmoyfUBlBuhrHA%2Fen-in%3F_r%3DAQABTCWWLtOW6kFRvBquBobf6AVrGMVmqGjH47NTkJrA80M%26company_location_id%26locale%3Den-IN
                          - generic [ref=f6e43]:
                            - generic [ref=f6e49]:
                              - generic: Email
                              - textbox "Email" [ref=f6e50]: nestle.choc@gmail.com
                              - generic [ref=f6e52]:
                                - button "More information about how your contact info is used" [ref=f6e53] [cursor=pointer]
                                - tooltip [aria-hidden] [ref=f6e57]: Used for your order confirmation and cart reminders
                            - generic [ref=f6e60]:
                              - checkbox "Email me with news and offers" [checked] [ref=f6e62] [cursor=pointer]
                              - generic [ref=f6e63] [cursor=pointer]: Email me with news and offers
                      - group [ref=f6e67]:
                        - generic [ref=f6e68]:
                          - heading "Delivery" [level=2] [ref=f6e70]
                          - generic [ref=f6e75]:
                            - generic [ref=f6e79]:
                              - generic [ref=f6e80]:
                                - generic [ref=f6e84]:
                                  - generic: Country/Region
                                  - combobox "Country/Region" [ref=f6e85]:
                                    - option "United Kingdom"
                                    - option "India" [selected]
                                    - option "South Africa"
                                    - option "Argentina"
                                    - option "Finland"
                                    - option "Afghanistan"
                                    - option "Åland Islands"
                                    - option "Albania"
                                    - option "Algeria"
                                    - option "Andorra"
                                    - option "Angola"
                                    - option "Anguilla"
                                    - option "Antigua & Barbuda"
                                    - option "Argentina"
                                    - option "Armenia"
                                    - option "Aruba"
                                    - option "Ascension Island"
                                    - option "Australia"
                                    - option "Austria"
                                    - option "Azerbaijan"
                                    - option "Bahamas"
                                    - option "Bahrain"
                                    - option "Bangladesh"
                                    - option "Barbados"
                                    - option "Belarus"
                                    - option "Belgium"
                                    - option "Belize"
                                    - option "Benin"
                                    - option "Bermuda"
                                    - option "Bhutan"
                                    - option "Bolivia"
                                    - option "Bosnia & Herzegovina"
                                    - option "Botswana"
                                    - option "Brazil"
                                    - option "British Indian Ocean Territory"
                                    - option "British Virgin Islands"
                                    - option "Brunei"
                                    - option "Bulgaria"
                                    - option "Burkina Faso"
                                    - option "Burundi"
                                    - option "Cambodia"
                                    - option "Cameroon"
                                    - option "Canada"
                                    - option "Cape Verde"
                                    - option "Caribbean Netherlands"
                                    - option "Cayman Islands"
                                    - option "Central African Republic"
                                    - option "Chad"
                                    - option "Chile"
                                    - option "China"
                                    - option "Christmas Island"
                                    - option "Cocos (Keeling) Islands"
                                    - option "Colombia"
                                    - option "Comoros"
                                    - option "Congo - Brazzaville"
                                    - option "Congo - Kinshasa"
                                    - option "Cook Islands"
                                    - option "Costa Rica"
                                    - option "Croatia"
                                    - option "Curaçao"
                                    - option "Cyprus"
                                    - option "Czechia"
                                    - option "Côte d’Ivoire"
                                    - option "Denmark"
                                    - option "Djibouti"
                                    - option "Dominica"
                                    - option "Dominican Republic"
                                    - option "Ecuador"
                                    - option "Egypt"
                                    - option "El Salvador"
                                    - option "Equatorial Guinea"
                                    - option "Eritrea"
                                    - option "Estonia"
                                    - option "Eswatini"
                                    - option "Ethiopia"
                                    - option "Falkland Islands"
                                    - option "Faroe Islands"
                                    - option "Fiji"
                                    - option "Finland"
                                    - option "France"
                                    - option "French Guiana"
                                    - option "French Polynesia"
                                    - option "French Southern Territories"
                                    - option "Gabon"
                                    - option "Gambia"
                                    - option "Georgia"
                                    - option "Germany"
                                    - option "Ghana"
                                    - option "Gibraltar"
                                    - option "Greece"
                                    - option "Greenland"
                                    - option "Grenada"
                                    - option "Guadeloupe"
                                    - option "Guatemala"
                                    - option "Guernsey"
                                    - option "Guinea"
                                    - option "Guinea-Bissau"
                                    - option "Guyana"
                                    - option "Haiti"
                                    - option "Honduras"
                                    - option "Hong Kong SAR"
                                    - option "Hungary"
                                    - option "Iceland"
                                    - option "India"
                                    - option "Indonesia"
                                    - option "Iraq"
                                    - option "Ireland"
                                    - option "Isle of Man"
                                    - option "Israel"
                                    - option "Italy"
                                    - option "Jamaica"
                                    - option "Japan"
                                    - option "Jersey"
                                    - option "Jordan"
                                    - option "Kazakhstan"
                                    - option "Kenya"
                                    - option "Kiribati"
                                    - option "Kosovo"
                                    - option "Kuwait"
                                    - option "Kyrgyzstan"
                                    - option "Laos"
                                    - option "Latvia"
                                    - option "Lebanon"
                                    - option "Lesotho"
                                    - option "Liberia"
                                    - option "Libya"
                                    - option "Liechtenstein"
                                    - option "Lithuania"
                                    - option "Luxembourg"
                                    - option "Macao SAR"
                                    - option "Madagascar"
                                    - option "Malawi"
                                    - option "Malaysia"
                                    - option "Maldives"
                                    - option "Mali"
                                    - option "Malta"
                                    - option "Martinique"
                                    - option "Mauritania"
                                    - option "Mauritius"
                                    - option "Mayotte"
                                    - option "Mexico"
                                    - option "Moldova"
                                    - option "Monaco"
                                    - option "Mongolia"
                                    - option "Montenegro"
                                    - option "Montserrat"
                                    - option "Morocco"
                                    - option "Mozambique"
                                    - option "Myanmar (Burma)"
                                    - option "Namibia"
                                    - option "Nauru"
                                    - option "Nepal"
                                    - option "Netherlands"
                                    - option "New Caledonia"
                                    - option "New Zealand"
                                    - option "Nicaragua"
                                    - option "Niger"
                                    - option "Nigeria"
                                    - option "Niue"
                                    - option "Norfolk Island"
                                    - option "North Macedonia"
                                    - option "Norway"
                                    - option "Oman"
                                    - option "Pakistan"
                                    - option "Palestinian Territories"
                                    - option "Panama"
                                    - option "Papua New Guinea"
                                    - option "Paraguay"
                                    - option "Peru"
                                    - option "Philippines"
                                    - option "Pitcairn Islands"
                                    - option "Poland"
                                    - option "Portugal"
                                    - option "Qatar"
                                    - option "Réunion"
                                    - option "Romania"
                                    - option "Russia"
                                    - option "Rwanda"
                                    - option "Samoa"
                                    - option "San Marino"
                                    - option "São Tomé & Príncipe"
                                    - option "Saudi Arabia"
                                    - option "Senegal"
                                    - option "Serbia"
                                    - option "Seychelles"
                                    - option "Sierra Leone"
                                    - option "Singapore"
                                    - option "Sint Maarten"
                                    - option "Slovakia"
                                    - option "Slovenia"
                                    - option "Solomon Islands"
                                    - option "Somalia"
                                    - option "South Africa"
                                    - option "South Georgia & South Sandwich Islands"
                                    - option "South Korea"
                                    - option "South Sudan"
                                    - option "Spain"
                                    - option "Sri Lanka"
                                    - option "St. Barthélemy"
                                    - option "St. Helena"
                                    - option "St. Kitts & Nevis"
                                    - option "St. Lucia"
                                    - option "St. Martin"
                                    - option "St. Pierre & Miquelon"
                                    - option "St. Vincent & Grenadines"
                                    - option "Sudan"
                                    - option "Suriname"
                                    - option "Svalbard & Jan Mayen"
                                    - option "Sweden"
                                    - option "Switzerland"
                                    - option "Taiwan"
                                    - option "Tajikistan"
                                    - option "Tanzania"
                                    - option "Thailand"
                                    - option "Timor-Leste"
                                    - option "Togo"
                                    - option "Tokelau"
                                    - option "Tonga"
                                    - option "Trinidad & Tobago"
                                    - option "Tristan da Cunha"
                                    - option "Tunisia"
                                    - option "Türkiye"
                                    - option "Turkmenistan"
                                    - option "Turks & Caicos Islands"
                                    - option "Tuvalu"
                                    - option "US Outlying Islands"
                                    - option "Uganda"
                                    - option "Ukraine"
                                    - option "United Arab Emirates"
                                    - option "United Kingdom"
                                    - option "United States"
                                    - option "Uruguay"
                                    - option "Uzbekistan"
                                    - option "Vanuatu"
                                    - option "Vatican City"
                                    - option "Venezuela"
                                    - option "Vietnam"
                                    - option "Wallis & Futuna"
                                    - option "Western Sahara"
                                    - option "Yemen"
                                    - option "Zambia"
                                    - option "Zimbabwe"
                                - generic [ref=f6e86]:
                                  - generic [ref=f6e88]:
                                    - generic: First name (optional)
                                    - textbox "First name (optional)" [ref=f6e89]: Kumar
                                  - generic [ref=f6e91]:
                                    - generic: Last name
                                    - textbox "Last name" [ref=f6e92]: Kumar
                                - generic [ref=f6e95]:
                                  - generic: Company (optional)
                                  - textbox "Company (optional)" [ref=f6e96]
                                - generic [ref=f6e102]:
                                  - generic [ref=f6e103]: Powered by Google
                                  - generic: Address
                                  - combobox "Address" [ref=f6e104]: Mahadevapura
                                - generic [ref=f6e111]:
                                  - generic: Apartment, suite, etc. (optional)
                                  - textbox "Apartment, suite, etc. (optional)" [ref=f6e112]: Surya
                                - generic [ref=f6e113]:
                                  - generic [ref=f6e115]:
                                    - generic: City
                                    - textbox "City" [ref=f6e116]: Bangalore
                                  - generic [ref=f6e119]:
                                    - generic: State
                                    - combobox "State" [ref=f6e120]:
                                      - option "Andaman and Nicobar Islands"
                                      - option "Andhra Pradesh"
                                      - option "Arunachal Pradesh"
                                      - option "Assam"
                                      - option "Bihar"
                                      - option "Chandigarh"
                                      - option "Chhattisgarh"
                                      - option "Dadra and Nagar Haveli"
                                      - option "Daman and Diu"
                                      - option "Delhi"
                                      - option "Goa"
                                      - option "Gujarat"
                                      - option "Haryana"
                                      - option "Himachal Pradesh"
                                      - option "Jammu and Kashmir"
                                      - option "Jharkhand"
                                      - option "Karnataka" [selected]
                                      - option "Kerala"
                                      - option "Ladakh"
                                      - option "Lakshadweep"
                                      - option "Madhya Pradesh"
                                      - option "Maharashtra"
                                      - option "Manipur"
                                      - option "Meghalaya"
                                      - option "Mizoram"
                                      - option "Nagaland"
                                      - option "Odisha"
                                      - option "Puducherry"
                                      - option "Punjab"
                                      - option "Rajasthan"
                                      - option "Sikkim"
                                      - option "Tamil Nadu"
                                      - option "Telangana"
                                      - option "Tripura"
                                      - option "Uttar Pradesh"
                                      - option "Uttarakhand"
                                      - option "West Bengal"
                                  - generic [ref=f6e123]:
                                    - generic: PIN code
                                    - textbox "PIN code" [ref=f6e124]: "560016"
                                - generic [ref=f6e127]:
                                  - generic: Phone (optional)
                                  - textbox "Phone (optional)" [ref=f6e128]: 99999 99999
                                  - generic [ref=f6e130]:
                                    - button "More information about Phone" [ref=f6e131] [cursor=pointer]
                                    - generic [ref=f6e135]:
                                      - img "IN" [ref=f6e137]
                                      - combobox "Phone number country code" [ref=f6e141]:
                                        - option "Afghanistan(+93)"
                                        - option "Åland Islands(+358)"
                                        - option "Albania(+355)"
                                        - option "Algeria(+213)"
                                        - option "Andorra(+376)"
                                        - option "Angola(+244)"
                                        - option "Anguilla(+1)"
                                        - option "Antigua & Barbuda(+1)"
                                        - option "Argentina(+54)"
                                        - option "Armenia(+374)"
                                        - option "Aruba(+297)"
                                        - option "Ascension Island(+247)"
                                        - option "Australia(+61)"
                                        - option "Austria(+43)"
                                        - option "Azerbaijan(+994)"
                                        - option "Bahamas(+1)"
                                        - option "Bahrain(+973)"
                                        - option "Bangladesh(+880)"
                                        - option "Barbados(+1)"
                                        - option "Belarus(+375)"
                                        - option "Belgium(+32)"
                                        - option "Belize(+501)"
                                        - option "Benin(+229)"
                                        - option "Bermuda(+1)"
                                        - option "Bhutan(+975)"
                                        - option "Bolivia(+591)"
                                        - option "Bosnia & Herzegovina(+387)"
                                        - option "Botswana(+267)"
                                        - option "Brazil(+55)"
                                        - option "British Indian Ocean Territory(+246)"
                                        - option "British Virgin Islands(+1)"
                                        - option "Brunei(+673)"
                                        - option "Bulgaria(+359)"
                                        - option "Burkina Faso(+226)"
                                        - option "Burundi(+257)"
                                        - option "Cambodia(+855)"
                                        - option "Cameroon(+237)"
                                        - option "Canada(+1)"
                                        - option "Cape Verde(+238)"
                                        - option "Caribbean Netherlands(+599)"
                                        - option "Cayman Islands(+1)"
                                        - option "Central African Republic(+236)"
                                        - option "Chad(+235)"
                                        - option "Chile(+56)"
                                        - option "China(+86)"
                                        - option "Christmas Island(+61)"
                                        - option "Cocos (Keeling) Islands(+891)"
                                        - option "Colombia(+57)"
                                        - option "Comoros(+269)"
                                        - option "Congo - Brazzaville(+242)"
                                        - option "Congo - Kinshasa(+243)"
                                        - option "Cook Islands(+682)"
                                        - option "Costa Rica(+506)"
                                        - option "Croatia(+385)"
                                        - option "Curaçao(+599)"
                                        - option "Cyprus(+357)"
                                        - option "Czechia(+420)"
                                        - option "Côte d’Ivoire(+225)"
                                        - option "Denmark(+45)"
                                        - option "Djibouti(+253)"
                                        - option "Dominica(+1)"
                                        - option "Dominican Republic(+1)"
                                        - option "Ecuador(+593)"
                                        - option "Egypt(+20)"
                                        - option "El Salvador(+503)"
                                        - option "Equatorial Guinea(+240)"
                                        - option "Eritrea(+291)"
                                        - option "Estonia(+372)"
                                        - option "Eswatini(+268)"
                                        - option "Ethiopia(+251)"
                                        - option "Falkland Islands(+500)"
                                        - option "Faroe Islands(+298)"
                                        - option "Fiji(+679)"
                                        - option "Finland(+358)"
                                        - option "France(+33)"
                                        - option "French Guiana(+594)"
                                        - option "French Polynesia(+689)"
                                        - option "French Southern Territories(+262)"
                                        - option "Gabon(+241)"
                                        - option "Gambia(+220)"
                                        - option "Georgia(+995)"
                                        - option "Germany(+49)"
                                        - option "Ghana(+233)"
                                        - option "Gibraltar(+350)"
                                        - option "Greece(+30)"
                                        - option "Greenland(+299)"
                                        - option "Grenada(+1)"
                                        - option "Guadeloupe(+590)"
                                        - option "Guatemala(+502)"
                                        - option "Guernsey(+44)"
                                        - option "Guinea(+224)"
                                        - option "Guinea-Bissau(+245)"
                                        - option "Guyana(+592)"
                                        - option "Haiti(+509)"
                                        - option "Honduras(+504)"
                                        - option "Hong Kong SAR(+852)"
                                        - option "Hungary(+36)"
                                        - option "Iceland(+354)"
                                        - option "India(+91)" [selected]
                                        - option "Indonesia(+62)"
                                        - option "Iraq(+964)"
                                        - option "Ireland(+353)"
                                        - option "Isle of Man(+44)"
                                        - option "Israel(+972)"
                                        - option "Italy(+39)"
                                        - option "Jamaica(+1)"
                                        - option "Japan(+81)"
                                        - option "Jersey(+44)"
                                        - option "Jordan(+962)"
                                        - option "Kazakhstan(+7)"
                                        - option "Kenya(+254)"
                                        - option "Kiribati(+686)"
                                        - option "Kosovo(+383)"
                                        - option "Kuwait(+965)"
                                        - option "Kyrgyzstan(+996)"
                                        - option "Laos(+856)"
                                        - option "Latvia(+371)"
                                        - option "Lebanon(+961)"
                                        - option "Lesotho(+266)"
                                        - option "Liberia(+231)"
                                        - option "Libya(+218)"
                                        - option "Liechtenstein(+423)"
                                        - option "Lithuania(+370)"
                                        - option "Luxembourg(+352)"
                                        - option "Macao SAR(+853)"
                                        - option "Madagascar(+261)"
                                        - option "Malawi(+265)"
                                        - option "Malaysia(+60)"
                                        - option "Maldives(+960)"
                                        - option "Mali(+223)"
                                        - option "Malta(+356)"
                                        - option "Martinique(+596)"
                                        - option "Mauritania(+222)"
                                        - option "Mauritius(+230)"
                                        - option "Mayotte(+262)"
                                        - option "Mexico(+52)"
                                        - option "Moldova(+373)"
                                        - option "Monaco(+377)"
                                        - option "Mongolia(+976)"
                                        - option "Montenegro(+382)"
                                        - option "Montserrat(+1)"
                                        - option "Morocco(+212)"
                                        - option "Mozambique(+258)"
                                        - option "Myanmar (Burma)(+95)"
                                        - option "Namibia(+264)"
                                        - option "Nauru(+674)"
                                        - option "Nepal(+977)"
                                        - option "Netherlands(+31)"
                                        - option "New Caledonia(+687)"
                                        - option "New Zealand(+64)"
                                        - option "Nicaragua(+505)"
                                        - option "Niger(+227)"
                                        - option "Nigeria(+234)"
                                        - option "Niue(+683)"
                                        - option "Norfolk Island(+672)"
                                        - option "North Macedonia(+389)"
                                        - option "Norway(+47)"
                                        - option "Oman(+968)"
                                        - option "Pakistan(+92)"
                                        - option "Palestinian Territories(+970)"
                                        - option "Panama(+507)"
                                        - option "Papua New Guinea(+675)"
                                        - option "Paraguay(+595)"
                                        - option "Peru(+51)"
                                        - option "Philippines(+63)"
                                        - option "Pitcairn Islands(+64)"
                                        - option "Poland(+48)"
                                        - option "Portugal(+351)"
                                        - option "Qatar(+974)"
                                        - option "Réunion(+262)"
                                        - option "Romania(+40)"
                                        - option "Russia(+7)"
                                        - option "Rwanda(+250)"
                                        - option "Samoa(+685)"
                                        - option "San Marino(+378)"
                                        - option "São Tomé & Príncipe(+239)"
                                        - option "Saudi Arabia(+966)"
                                        - option "Senegal(+221)"
                                        - option "Serbia(+381)"
                                        - option "Seychelles(+248)"
                                        - option "Sierra Leone(+232)"
                                        - option "Singapore(+65)"
                                        - option "Sint Maarten(+1)"
                                        - option "Slovakia(+421)"
                                        - option "Slovenia(+386)"
                                        - option "Solomon Islands(+677)"
                                        - option "Somalia(+252)"
                                        - option "South Africa(+27)"
                                        - option "South Georgia & South Sandwich Islands(+500)"
                                        - option "South Korea(+82)"
                                        - option "South Sudan(+211)"
                                        - option "Spain(+34)"
                                        - option "Sri Lanka(+94)"
                                        - option "St. Barthélemy(+590)"
                                        - option "St. Helena(+290)"
                                        - option "St. Kitts & Nevis(+1)"
                                        - option "St. Lucia(+1)"
                                        - option "St. Martin(+590)"
                                        - option "St. Pierre & Miquelon(+508)"
                                        - option "St. Vincent & Grenadines(+1)"
                                        - option "Sudan(+249)"
                                        - option "Suriname(+597)"
                                        - option "Svalbard & Jan Mayen(+47)"
                                        - option "Sweden(+46)"
                                        - option "Switzerland(+41)"
                                        - option "Taiwan(+886)"
                                        - option "Tajikistan(+992)"
                                        - option "Tanzania(+255)"
                                        - option "Thailand(+66)"
                                        - option "Timor-Leste(+670)"
                                        - option "Togo(+228)"
                                        - option "Tokelau(+690)"
                                        - option "Tonga(+676)"
                                        - option "Trinidad & Tobago(+1)"
                                        - option "Tristan da Cunha(+2908)"
                                        - option "Tunisia(+216)"
                                        - option "Türkiye(+90)"
                                        - option "Turkmenistan(+993)"
                                        - option "Turks & Caicos Islands(+1)"
                                        - option "Tuvalu(+688)"
                                        - option "US Outlying Islands(+1)"
                                        - option "Uganda(+256)"
                                        - option "Ukraine(+380)"
                                        - option "United Arab Emirates(+971)"
                                        - option "United Kingdom(+44)"
                                        - option "United States(+1)"
                                        - option "Uruguay(+598)"
                                        - option "Uzbekistan(+998)"
                                        - option "Vanuatu(+678)"
                                        - option "Vatican City(+39)"
                                        - option "Venezuela(+58)"
                                        - option "Vietnam(+84)"
                                        - option "Wallis & Futuna(+681)"
                                        - option "Western Sahara(+212)"
                                        - option "Yemen(+967)"
                                        - option "Zambia(+260)"
                                        - option "Zimbabwe(+263)"
                                - generic [ref=f6e143]:
                                  - checkbox "Save this information for next time" [ref=f6e145] [cursor=pointer]
                                  - generic [ref=f6e146] [cursor=pointer]: Save this information for next time
                              - generic [ref=f6e147]:
                                - textbox [aria-hidden] [ref=f6e148]: Kumar
                                - textbox [aria-hidden] [ref=f6e149]: Kumar
                                - textbox [aria-hidden] [ref=f6e150]
                                - textbox [aria-hidden] [ref=f6e151]: Mahadevapura
                                - textbox [aria-hidden] [ref=f6e152]: Surya
                                - textbox [aria-hidden] [ref=f6e153]: Bangalore
                                - textbox [aria-hidden] [ref=f6e154]: IN
                                - textbox [aria-hidden] [ref=f6e155]: KA
                                - textbox [aria-hidden] [ref=f6e156]: KA
                                - textbox [aria-hidden] [ref=f6e157]: KA
                                - textbox [aria-hidden] [ref=f6e158]: "560016"
                                - textbox [aria-hidden] [ref=f6e159]: "9999999999"
                            - generic [ref=f6e160]:
                              - heading "Shipping method" [level=2] [ref=f6e161]
                              - group "Choose a shipping method" [ref=f6e169]:
                                - group [ref=f6e171]:
                                  - generic [ref=f6e174]:
                                    - heading [level=3] [ref=f6e176]:
                                      - paragraph [ref=f6e177]:
                                        - strong [ref=f6e178]: International Shipping
                                    - strong [ref=f6e180]: £20.00
                      - region "Payment" [ref=f6e182]:
                        - group [ref=f6e186]:
                          - generic [ref=f6e187]:
                            - heading "Payment" [level=2] [ref=f6e190]
                            - paragraph [ref=f6e192]: All transactions are secure and encrypted.
                          - alert [active] [ref=f6e193]:
                            - generic [ref=f6e198]: This store doesn't accept Visa. Use a different card to pay.
                          - generic [ref=f6e201]:
                            - generic [ref=f6e202]:
                              - group [ref=f6e208]:
                                - generic [ref=f6e210]:
                                  - generic [ref=f6e211]:
                                    - heading [level=3] [ref=f6e213]:
                                      - strong [ref=f6e214]: Credit card
                                    - generic [ref=f6e215]:
                                      - status [ref=f6e216]
                                      - button "Test Payment Gateway" [ref=f6e219] [cursor=pointer]:
                                        - img "Test Payment Gateway" [ref=f6e221]
                                  - generic [ref=f6e228]:
                                    - generic [ref=f6e229]:
                                      - heading "Testing instruction" [level=4] [ref=f6e230]
                                      - generic [ref=f6e231]:
                                        - paragraph [ref=f6e232]: "Use these values to test your checkout:"
                                        - list [ref=f6e234]:
                                          - listitem [ref=f6e235]:
                                            - strong [ref=f6e236]: "1"
                                            - text: to simulate an approved transaction
                                          - listitem [ref=f6e237]:
                                            - strong [ref=f6e238]: "2"
                                            - text: to simulate a declined transaction
                                          - listitem [ref=f6e239]:
                                            - strong [ref=f6e240]: "3"
                                            - text: to simulate a gateway failure
                                        - paragraph [ref=f6e241]: Use any future expiration date and any 3-digit security code.
                                      - link "Get support" [ref=f6e243] [cursor=pointer]:
                                        - /url: https://help.shopify.com/en/manual/checkout-settings/test-orders/payments-test-mode#test-payment-gateway
                                    - generic [ref=f6e246]:
                                      - generic [ref=f6e247]:
                                        - generic [ref=f6e248]:
                                          - generic: Card number
                                          - iframe [ref=f6e251]:
                                            - generic [ref=f8e2]:
                                              - generic [ref=f8e3]:
                                                - generic [ref=f8e4]: Card number
                                                - textbox "Card number" [invalid] [ref=f8e5]:
                                                  - /placeholder: ""
                                                  - text: "4242424242424242"
                                                - generic [ref=f8e6]: Enter a valid card number
                                              - generic [aria-hidden] [ref=f8e8]: Name on card
                                              - textbox [aria-hidden] [ref=f8e9]
                                              - generic [aria-hidden] [ref=f8e10]: Expiry month
                                              - textbox [aria-hidden] [ref=f8e11]
                                              - generic [aria-hidden] [ref=f8e12]: Expiry year
                                              - textbox [aria-hidden] [ref=f8e13]
                                              - generic [aria-hidden] [ref=f8e14]: Expiry date (MM / YY)
                                              - textbox [aria-hidden] [ref=f8e15]
                                              - generic [aria-hidden] [ref=f8e16]: Security code
                                              - textbox [aria-hidden] [ref=f8e17]
                                              - generic [aria-hidden] [ref=f8e18]: Issue date (MM / YY)
                                              - textbox [aria-hidden] [ref=f8e19]
                                              - generic [aria-hidden] [ref=f8e20]: Issue number
                                              - textbox [aria-hidden] [ref=f8e21]
                                              - button [aria-hidden] [ref=f8e22]
                                        - generic [ref=f6e256]: Enter a valid card number
                                      - generic [ref=f6e257]:
                                        - generic [ref=f6e260]:
                                          - generic: Expiration date (MM / YY)
                                          - iframe [ref=f6e263]:
                                            - generic [ref=f9e2]:
                                              - generic [aria-hidden] [ref=f9e3]: Credit Card Number
                                              - textbox [aria-hidden] [ref=f9e4]
                                              - generic [aria-hidden] [ref=f9e5]: Name on card
                                              - textbox [aria-hidden] [ref=f9e6]
                                              - generic [aria-hidden] [ref=f9e7]: Expiry month
                                              - textbox [aria-hidden] [ref=f9e8]
                                              - generic [aria-hidden] [ref=f9e9]: Expiry year
                                              - textbox [aria-hidden] [ref=f9e10]
                                              - generic [ref=f9e11]:
                                                - generic [ref=f9e12]: Expiration date (MM / YY)
                                                - textbox "Expiration date (MM / YY)" [ref=f9e13]:
                                                  - /placeholder: ""
                                                  - text: 12 / 30
                                              - generic [aria-hidden] [ref=f9e16]: Security code
                                              - textbox [aria-hidden] [ref=f9e17]
                                              - generic [aria-hidden] [ref=f9e18]: Issue date (MM / YY)
                                              - textbox [aria-hidden] [ref=f9e19]
                                              - generic [aria-hidden] [ref=f9e20]: Issue number
                                              - textbox [aria-hidden] [ref=f9e21]
                                              - button [aria-hidden] [ref=f9e22]
                                        - generic [ref=f6e265]:
                                          - generic [ref=f6e266]:
                                            - generic: Security code
                                            - generic [ref=f6e267]:
                                              - iframe [ref=f6e269]:
                                                - generic [ref=f10e2]:
                                                  - generic [aria-hidden] [ref=f10e3]: Credit Card Number
                                                  - textbox [aria-hidden] [ref=f10e4]
                                                  - generic [aria-hidden] [ref=f10e5]: Name on card
                                                  - textbox [aria-hidden] [ref=f10e6]
                                                  - generic [aria-hidden] [ref=f10e7]: Expiry month
                                                  - textbox [aria-hidden] [ref=f10e8]
                                                  - generic [aria-hidden] [ref=f10e9]: Expiry year
                                                  - textbox [aria-hidden] [ref=f10e10]
                                                  - generic [aria-hidden] [ref=f10e11]: Expiry date (MM / YY)
                                                  - textbox [aria-hidden] [ref=f10e12]
                                                  - generic [ref=f10e13]:
                                                    - generic [ref=f10e14]: Security code
                                                    - textbox "Security code" [invalid] [ref=f10e15]:
                                                      - /placeholder: ""
                                                      - text: "111"
                                                    - generic [ref=f10e16]: Enter the CVV or security code on your card
                                                  - generic [aria-hidden] [ref=f10e18]: Issue date (MM / YY)
                                                  - textbox [aria-hidden] [ref=f10e19]
                                                  - generic [aria-hidden] [ref=f10e20]: Issue number
                                                  - textbox [aria-hidden] [ref=f10e21]
                                                  - button [aria-hidden] [ref=f10e22]
                                              - button "More information about Security code" [ref=f6e271] [cursor=pointer]
                                          - generic [ref=f6e275]: Enter the CVV or security code on your card
                                      - generic [ref=f6e278]:
                                        - generic: Name on card
                                        - iframe [ref=f6e281]:
                                          - generic [ref=f13e2]:
                                            - generic [aria-hidden] [ref=f13e3]: Credit Card Number
                                            - textbox [aria-hidden] [ref=f13e4]
                                            - generic [ref=f13e5]:
                                              - generic [ref=f13e6]: Name on card
                                              - textbox "Name on card" [ref=f13e7]:
                                                - /placeholder: ""
                                                - text: Test payment gateway
                                            - generic [aria-hidden] [ref=f13e10]: Expiry month
                                            - textbox [aria-hidden] [ref=f13e11]
                                            - generic [aria-hidden] [ref=f13e12]: Expiry year
                                            - textbox [aria-hidden] [ref=f13e13]
                                            - generic [aria-hidden] [ref=f13e14]: Expiry date (MM / YY)
                                            - textbox [aria-hidden] [ref=f13e15]
                                            - generic [aria-hidden] [ref=f13e16]: Security code
                                            - textbox [aria-hidden] [ref=f13e17]
                                            - generic [aria-hidden] [ref=f13e18]: Issue date (MM / YY)
                                            - textbox [aria-hidden] [ref=f13e19]
                                            - generic [aria-hidden] [ref=f13e20]: Issue number
                                            - textbox [aria-hidden] [ref=f13e21]
                                            - button [aria-hidden] [ref=f13e22]
                                    - generic [ref=f6e284]:
                                      - checkbox "Use shipping address as billing address" [checked] [ref=f6e286] [cursor=pointer]
                                      - generic [ref=f6e287] [cursor=pointer]: Use shipping address as billing address
                              - textbox [aria-hidden] [ref=f6e289]
                            - button "Add discount" [ref=f6e290] [cursor=pointer]
                        - generic [ref=f6e297]:
                          - heading "Finalize order" [level=2] [ref=f6e298]
                          - button "Pay now" [ref=f6e302] [cursor=pointer]
                    - button [aria-hidden] [ref=f6e304] [cursor=pointer]: Submit
              - contentinfo [ref=f6e305]:
                - list [ref=f6e309]:
                  - listitem [ref=f6e310]:
                    - button "Terms of service" [ref=f6e311] [cursor=pointer]
            - complementary [ref=f6e314]:
              - generic [ref=f6e318]:
                - heading "Order summary" [level=2] [ref=f6e319]
                - generic [ref=f6e322]:
                  - region "Shopping cart" [ref=f6e323]:
                    - heading "Shopping cart" [level=3] [ref=f6e325]
                    - table "Shopping cart" [ref=f6e326]:
                      - rowgroup [ref=f6e327]:
                        - row "Product image Description Quantity Price":
                          - columnheader "Product image" [ref=f6e328]
                          - columnheader "Description" [ref=f6e329]
                          - columnheader "Quantity" [ref=f6e330]
                          - columnheader "Price" [ref=f6e331]
                      - rowgroup [ref=f6e332]:
                        - row "Quantity 1 Grey jacket Grey jacket 1 £55.00" [ref=f6e333]:
                          - cell "Quantity 1" [ref=f6e334]:
                            - generic [ref=f6e337]:
                              - generic [ref=f6e338]: Quantity
                              - text: "1"
                          - cell [ref=f6e339]:
                            - generic [ref=f6e340]:
                              - paragraph [ref=f6e341]: Grey jacket
                              - paragraph [ref=f6e343]: Grey jacket
                          - cell "1"
                          - cell "£55.00" [ref=f6e345]
                  - generic [aria-hidden]:
                    - generic: Scroll for more items
                - generic [ref=f6e350]:
                  - heading "Discount" [level=3] [ref=f6e351]
                  - generic [ref=f6e352]:
                    - generic [ref=f6e355]:
                      - generic [ref=f6e358]:
                        - generic [ref=f6e360]:
                          - generic: Discount code
                          - textbox "Discount code" [ref=f6e361]
                        - button "Apply Discount Code" [disabled]:
                          - generic: Apply
                      - button [aria-hidden] [ref=f6e363] [cursor=pointer]: Submit
                    - button "Back to finalize order" [ref=f6e364] [cursor=pointer]
                - generic [ref=f6e365]:
                  - heading "Cost summary" [level=3] [ref=f6e367]
                  - table "Cost summary" [ref=f6e368]:
                    - rowgroup [ref=f6e369]:
                      - row [ref=f6e370]:
                        - columnheader "Item" [ref=f6e371]
                        - columnheader "Value" [ref=f6e372]
                    - rowgroup [ref=f6e373]:
                      - row [ref=f6e374]:
                        - rowheader "Subtotal" [ref=f6e375]
                        - cell "£55.00" [ref=f6e376]
                      - row [ref=f6e377]:
                        - rowheader "Shipping" [ref=f6e378]
                        - cell "£20.00" [ref=f6e381]
                      - row [ref=f6e382]:
                        - rowheader [ref=f6e383]:
                          - strong [ref=f6e384]: Total
                        - cell "GBP £75.00" [ref=f6e385]:
                          - generic [ref=f6e386]:
                            - generic [ref=f6e387]: GBP
                            - strong [ref=f6e388]: £75.00
      - generic:
        - progressbar
  - generic [aria-hidden] [ref=f6e389]: Opens external website in a new window.
  - generic [aria-hidden] [ref=f6e390]: Opens in a new window.
  - generic [aria-hidden] [ref=f6e391]: Opens external website.
  - status [ref=f6e392]: "Updated total price: 75.00 British poundsUpdated shipping method: International ShippingPowered by Google"
  - alert [ref=f6e393]
```

# Test source

```ts
  1  | class CheckoutPage {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  |   }
  5  | 
  6  |   async fillContactEmail(email) {
  7  |     await this.page.getByRole('textbox', { name: 'Email' }).fill(email);
  8  |   }
  9  | 
  10 |   async selectCountry(country) {
  11 |     await this.page.locator('select[name="countryCode"]').selectOption({ label: country });
  12 |   }
  13 | 
  14 |   async selectState(state) {
  15 |     await this.page.locator('select[name="zone"]').waitFor({ state: 'visible', timeout: 5000 });
  16 |     await this.page.locator('select[name="zone"]').selectOption({ label: state });
  17 |   }
  18 | 
  19 |   async fillFirstName(firstName) {
  20 |     await this.page.locator('input[name="firstName"]').first().fill(firstName);
  21 |   }
  22 | 
  23 |   async fillLastName(lastName) {
  24 |     await this.page.locator('input[name="lastName"]').first().fill(lastName);
  25 |   }
  26 | 
  27 |   async fillAddress(address) {
  28 |     await this.page.locator('#shipping-address1').fill(address);
  29 |   }
  30 | 
  31 |   async fillApartment(apartment) {
  32 |     await this.page.locator('input[name="address2"]').first().fill(apartment);
  33 |   }
  34 | 
  35 |   async fillCity(city) {
  36 |     await this.page.locator('input[name="city"]').first().fill(city);
  37 |   }
  38 | 
  39 |   async fillPostcode(postcode) {
  40 |     await this.page.locator('input[name="postalCode"]').first().fill(postcode);
  41 |   }
  42 | 
  43 |   async fillPhone(phone) {
  44 |     await this.page.locator('input[name="phone"]').first().fill(phone);
  45 |   }
  46 | 
  47 |   async clickPayNow() {
  48 |     await this.page.locator('#checkout-pay-button').click();
  49 |     await this.page.waitForTimeout(5000);
  50 |   }
  51 | 
  52 |   async fillPaymentFields({ nameOnCard, cardNumber, cvv, expiryDate }) {
  53 |     // Card number iframe
  54 |     const numberFrame = this.page.frameLocator('iframe[id^="card-fields-number"]');
  55 |     await numberFrame.locator('#number').fill(cardNumber);
  56 | 
  57 |     // Expiry iframe
  58 |     const expiryFrame = this.page.frameLocator('iframe[id^="card-fields-expiry"]');
  59 |     await expiryFrame.locator('#expiry').fill(expiryDate);
  60 | 
  61 |     // CVV iframe
  62 |     const cvvFrame = this.page.frameLocator('iframe[id^="card-fields-verification_value"]');
  63 |     await cvvFrame.locator('#verification_value').fill(cvv);
  64 | 
  65 |     // Name on card iframe
  66 |     const nameFrame = this.page.frameLocator('iframe[id^="card-fields-name"]');
  67 |     await nameFrame.locator('#name').fill(nameOnCard);
  68 |   }
  69 | 
  70 |   async isOrderConfirmationVisible() {
> 71 |     const pageText = await this.page.locator('body').textContent();
     |                                                      ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
  72 |     return pageText.includes('confirmed') ||
  73 |            pageText.includes('Thank you') ||
  74 |            pageText.includes('Order') ||
  75 |            pageText.includes('success');
  76 |   }
  77 | }
  78 | 
  79 | module.exports = { CheckoutPage };
  80 | 
```