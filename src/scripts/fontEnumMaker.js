/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");

const jsonFilePath = path.join("", "src", "assets/fonts", "selection.json"); // Update the path to your JSON file

const outputFilePath = path.join(
  "",
  "src",
  "common/components/Icon",
  "enums.ts"
); // Update the path to the output file

const generateEnumFromJSON = () => {
  try {
    // Read the JSON file
    const jsonData = fs.readFileSync(jsonFilePath, "utf-8");
    const parsedData = JSON.parse(jsonData);

    // Extract the names from the properties
    const enumValues = parsedData.icons.map((icon) => icon.properties.name);

    // Create the enum string
    const enumString = `export enum IconSetEnum {\n${enumValues
      .map((value) => `  ${value.replace(/-/g, "_")} = "${value}",`)
      .join("\n")}\n}`;

    // Write the enum to the output file
    fs.writeFileSync(outputFilePath, enumString);

    console.log("Enum generated successfully!");
  } catch (error) {
    console.error("Error generating the enum:", error);
  }
};

generateEnumFromJSON();
