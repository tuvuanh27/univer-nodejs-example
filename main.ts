import { UniverSheetsCorePreset } from "@univerjs/preset-sheets-core";
import sheetsNodeCoreEnUS from "@univerjs/preset-sheets-node-core/locales/en-US";
import { createUniver, LocaleType, mergeLocales } from "@univerjs/presets";

async function run(): Promise<void> {
  const universerEndpoint = "http://localhost:8000"

  const { univerAPI } = createUniver({
    locale: LocaleType.EN_US,
    locales: {
      [LocaleType.EN_US]: mergeLocales(sheetsNodeCoreEnUS),
    },
    presets: [UniverSheetsCorePreset()],
    plugins: []
  });

  // You can call any Facade API here for document processing
}

run();
