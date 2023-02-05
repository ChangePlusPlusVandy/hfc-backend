# her future coalition (backend)
This is the backend for the Her Future Coalition Web Application. It is a RESTful API built with Node.js and Express.js. It uses MongoDB as its database.

# API Endpoints
| HTTP Method | Name | Description | Parameters | Responses |
| - | - | - | - | - |
| ![POST](https://img.shields.io/badge/-POST-green) | `/beneficiaries` | Create a beneficiary. Called upon at beneficiary registration | ...all user fields | [`201`] Successful beneficiary creation. <br> [`400`] Bad request. <br> [`401`] Unauthorized. idk who u r. <br> [`403`] Forbidden. ik who u r...nice try  ;). <br> [`500`] Internal server error. |
| ![GET](https://img.shields.io/badge/-GET-blue) | `/beneficiaries/?id={beneficiaryID}` | Get a single beneficiary (or all beneficiaries). If no parameters are given, returns all beneficiaries. | ... | [`200`] - Successful user retrieval. <br> [`400`] Bad request. <br> [`401`] Unauthorized. idk who u r. <br> [`403`] Forbidden. ik who u r...nice try ;). <br> [`404`] - User not found. <br> [`500`] Internal server error. |
| ![PUT](https://img.shields.io/badge/-PUT-orange) | `/beneficiaries/{beneficiariesID}` | Update the beneficiary with the given ID. | `beneficiariesId` (Object ID) - The MongoDB-generated UUID (`_id`) attached to the target beneficiary. <br><br> ...all new user fields. | [`200`] - Successful user update. <br> [`400`] Bad request. <br> [`401`] Unauthorized. idk who u r. <br> [`403`] Forbidden. ik who u r...nice try ;). <br> [`404`] - User not found. <br> [`500`] Internal server error. |
| ![PUT](https://img.shields.io/badge/-PUT-orange) | `/beneficiaries/{beneficiariesID}/archive` | Mark a beneficiary as archived | `beneficiariesId` (Object ID) - The MongoDB-generated UUID (`_id`) attached to the target beneficiary. <br><br> ...all new user fields. | [`200`] - Successful user update. <br> [`400`] Bad request. <br> [`401`] Unauthorized. idk who u r. <br> [`403`] Forbidden. ik who u r...nice try ;). <br> [`404`] - User not found. <br> [`500`] Internal server error. |
| ![PUT](https://img.shields.io/badge/-PUT-orange) | `/beneficiaries/{beneficiariesID}/unarchive` | Mark a beneficiary as unarchived | `beneficiariesId` (Object ID) - The MongoDB-generated UUID (`_id`) attached to the target beneficiary. <br><br> ...all new user fields. | [`200`] - Successful user update. <br> [`400`] Bad request. <br> [`401`] Unauthorized. idk who u r. <br> [`403`] Forbidden. ik who u r...nice try ;). <br> [`404`] - User not found. <br> [`500`] Internal server error. |
| ![DELETE](https://img.shields.io/badge/-DELETE-red) | `/beneficiaries/{beneficiaryId}` | Delete a beneficiary. | `beneficiariesId` (Object ID) - The MongoDB-generated UUID (`_id`) attached to the target beneficiary. | [`200`] - Successful user deletion. <br> [`400`] Bad request. <br> [`401`] Unauthorized. idk who u r. <br> [`403`] Forbidden. ik who u r...nice try ;). <br> [`404`] - User not found. <br> [`500`] Internal server error. |



| ![POST](https://img.shields.io/badge/-POST-green) | `/group` | Create a group. Called when a user presses the 'Create' button on the 'New Group' modal. Handles all potential errors and validation such as checking the 'group status' of each member in the new group. | ...all group fields | [`201`] - Successful group creation. <br> [`400`] Bad request. <br> [`401`] Unauthorized. idk who u r. <br> [`403`] Forbidden. ik who u r...nice try ;). <br> [`500`] Internal server error. |
| ![GET](https://img.shields.io/badge/-GET-blue) | `/group/?id={groupId}` | Get a single group (or all groups). Called upon user login and any other time all information attached to a group is needed. The group's ID may be passed as a filter. If no ID is given, returns all groups. | `id` (Object ID) - The MongoDB-generated UUID (`_id`) attached to the target group. | [`200`] - Successful group retrieval. <br> [`400`] Bad request. <br> [`401`] Unauthorized. idk who u r. <br> [`403`] Forbidden. ik who u r...nice try ;). <br> [`404`] - Group not found. <br> [`500`] Internal server error. |
| ![PUT](https://img.shields.io/badge/-PUT-orange) | `/group/{groupId}` | Replace a group document entirely. | `groupId` (Object ID) - The MongoDB-generated UUID (`_id`) attached to the target group. <br><br> ...all new group fields. | [`200`] - Successful group update. <br> [`400`] Bad request. <br> [`401`] Unauthorized. idk who u r. <br> [`403`] Forbidden. ik who u r...nice try ;). <br> [`404`] - Group not found. <br> [`500`] Internal server error. |
| ![DELETE](https://img.shields.io/badge/-DELETE-red) | `/group/{groupId}` | Delete a group. Called when a group is disbanned, expires, or all members leave a group. | `groupId` (Object ID) - The MongoDB-generated UUID (`_id`) attached to the target group. | [`200`] - Successful group deletion. <br> [`400`] Bad request. <br> [`401`] Unauthorized. idk who u r. <br> [`403`] Forbidden. ik who u r...nice try ;). <br> [`404`] - Group not found. <br> [`500`] Internal server error. |
| ![POST](https://img.shields.io/badge/-POST-green) | `/venue` | Create a venue. Called when new venues should be added to the database. | ...all venue fields | [`201`] - Successful venue creation. <br> [`400`] Bad request. <br> [`401`] Unauthorized. idk who u r. <br> [`403`] Forbidden. ik who u r...nice try ;). <br> [`500`] Internal server error. |
| ![GET](https://img.shields.io/badge/-GET-blue) | `/venue/?id={venueId}` | Get a single venue (or all venues). If no ID is given, returns all venues. | `id` (Object ID) - The MongoDB-generated UUID (`_id`) attached to the target venue. (optional) | [`200`] - Successful venue retrieval. <br> [`400`] Bad request. <br> [`401`] Unauthorized. idk who u r. <br> [`403`] Forbidden. ik who u r...nice try ;). <br> [`404`] - Venue not found. <br> [`500`] Internal server error. |
| ![PUT](https://img.shields.io/badge/-PUT-orange) | `/venue/{venueId}` | Replace a venue document entirely. | `venueId` (Object ID) - The MongoDB-generated UUID (`_id`) attached to the target venue. <br><br> ...all new venue feilds. | [`200`] - Successful venue update. <br> [`400`] Bad request. <br> [`401`] Unauthorized. idk who u r. <br> [`403`] Forbidden. ik who u r...nice try ;). <br> [`404`] - Venue not found. <br> [`500`] Internal server error. |
| ![DELETE](https://img.shields.io/badge/-DELETE-red) | `/venue/{venueId}` | Delete a venue. | `venueId` (Object ID) - The MongoDB-generated UUID (`_id`) attached to the target venue. | [`200`] - Successful venue deletion. <br> [`400`] Bad request. <br> [`401`] Unauthorized. idk who u r. <br> [`403`] Forbidden. ik who u r...nice try ;). <br> [`404`] - Venue not found. <br> [`500`] Internal server error. |

# Models
## User
```json
{
    "_id": ObjectId("1a2b3c4d5e6f"), // MongoDB-generated UUID
}
```

## Group
```json
{
    "_id": ObjectId("1a2b3c4d5e6f"), // MongoDB-generated UUID
}
```

## Venue
```json
{
    "_id": ObjectId("1a2b3c4d5e6f"), // MongoDB-generated UUID
}
```