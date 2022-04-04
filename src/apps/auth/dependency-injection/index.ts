import { ContainerBuilder, YamlFileLoader } from 'node-dependency-injection'
import path from 'path'

const container = new ContainerBuilder()
const loader = new YamlFileLoader(container)

loader.load(path.join(__dirname, 'application.yaml'))

export default container
