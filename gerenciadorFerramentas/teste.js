import { GerenteTools} from "./GerenteTools.js"
const gerenteTools = new GerenteTools();

const prompt = await gerenteTools.prompt("../prompt/prompt.md");

console.log(prompt)
