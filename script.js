javascript: (() => { 
var uid2 = prompt("UID IG : ");

function ClientMutation() { return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16) ); }

var url = 'https://accountscenter.facebook.com/api/graphql/';
var dtsg = require(["DTSGInitData"]).token;
var userid = require(["CurrentUserInitialData"]).USER_ID;
var variables ='{"client_mutation_id":"'+ClientMutation()+'","accounts_to_sync":["'+uid2+'","'+userid+'"],"resources_to_sync":["NAME","PROFILE_PHOTO"],"resources_to_unsync":null,"scale":3,"source_of_truth_array":[{"resource_source":"IG"},{"resource_source":"FB"}],"source_account":"'+userid+'","family_device_id":"device_id_fetch_datr","username_unsync_params":null,"platform":"FACEBOOK","sync_logging_params":{"client_flow_type":"IM_SETTINGS"},"interface":"FB_WEB","feta_profile_sync":false}';
var data = "fb_dtsg="+dtsg+"&__user="+userid+"&variables="+variables+"&av="+userid+"&fb_api_req_friendly_name=useFXIMUpdateNameMutation&fb_api_caller_class=RelayModern&server_timestamps=true&doc_id=9388416374608398";

fetch(url, { method: 'POST', body: data, headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(resp => resp.text()).then(resp => {if (resp.includes('error')) { alert(resp) } else {alert("GAGAL")}})

})();
