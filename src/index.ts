import { PluginApi } from './@interface/pluginApi.i'

class examplePlugin {
    private api: PluginApi

    constructor(api: PluginApi) {
      this.api = api
    }

    public onLoaded(): void {
      this.api.getLogger().info('Plugin loaded!')
    }
    public onEnabled(): void {
      this.api.getLogger().info('Plugin enabled!')
    }
    public onDisabled(): void {
      this.api.getLogger().info('Plugin disabled!')
    }
}

export = examplePlugin
