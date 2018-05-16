function(emitters, gutters, growLightsOnAuto, overheadLights, ellipsis) {
  const EllipsisApi = require('ellipsis-api');
const api = new EllipsisApi(ellipsis);

const channel = ellipsis.userInfo.messageInfo.channel;
const user = ellipsis.userInfo.messageInfo.userId;
const summary = `
Megalodon checklist for channel <#${channel}> has been completed by <@${user}>:
${checkFor(emitters)}   Emitters flowing
${checkFor(gutters)}   Gutters draining
${checkFor(growLightsOnAuto)}   Grow lights on auto
${checkFor(overheadLights)}   Overhead room lights only on during production activities (M,W,F)
`;

const channels = ["farm-ops-announce"].filter(ea => ea != channel);
api.say({ message: summary }).then(res => {
  Promise.all(channels.map(postSummaryTo)).then(ellipsis.noResponse);                                 
});

function postSummaryTo(channel) {
  return api.run({
    actionName: "post-checklist-summary",
    args: [{ name: "summary", value: summary }],
    channel: channel
  });
}

function checkFor(bool) {
  return bool? ":white_check_mark:" : ":x:";
}
}
