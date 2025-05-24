window.watsonAssistantChatOptions = {
    integrationID: "7732e394-8bf8-4a76-9ee3-08a0501ff219", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "57d89cae-105e-4184-ae9b-f484ec15e365", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });