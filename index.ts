import { TestTool } from "./utility";
import "./fetch/aws";

const runner = new TestTool();

runner.runTest("aws", 2);
runner.runTest("gcp", 2);
