export default class ServiceManager {
    services = {}

    register(name, service) {
        if (!this.services[name]) {
            this.services[name] = service
        }
    }

    get(name) {
        return this.services[name] || undefined
    }
}
