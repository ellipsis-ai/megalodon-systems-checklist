function(ellipsis) {
  const intro = `
:shark: Hello, this is the Megalodon Systems Checklist reminder. 

Anyone in this channel can answer the following yes/no questions. Click below to begin.
`;
ellipsis.success(intro, {
  choices: [{
    label: "Start",
    actionName: "run-checklist",
    allowOthers: true
  }]
});
}
