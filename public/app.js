Ext.Loader.setConfig({ enabled: true });
Ext.application({
    name: 'ExtJsSample',
    appFolder: 'app',
    controllers: [
        'MessageController'
    ],
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'auto',
            items: {
                xtype: 'messageList'
            }
        });
    }
});