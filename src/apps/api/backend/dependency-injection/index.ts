import { ContainerBuilder, YamlFileLoader } from 'node-dependency-injection'
import path from 'path'

const container = new ContainerBuilder()
const loader = new YamlFileLoader(container)
const env = process.env.NODE_ENV || 'dev'

loader.load(path.join(__dirname, `application_${env}.yaml`))

export default container
