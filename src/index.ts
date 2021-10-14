import { PluginApi } from './@interface/pluginApi.i'

class examplePlugin {
    private api: PluginApi

    constructor(api: PluginApi) {
      this.api = api
    }

    public onEnabled(): void {
      this.api.getLogger().info('Enabled!')
    }
    public onDisabled(): void {
      this.api.getLogger().info('Disabled!')
    }
}

export = examplePlugin
