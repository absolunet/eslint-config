//--------------------------------------------------------
//-- Manager
//--------------------------------------------------------
import { fileURLToPath, URL } from "node:url";
import fss from "@absolunet/fss"; // eslint-disable-line node/no-unpublished-import
import { manager } from "@absolunet/manager"; // eslint-disable-line node/no-unpublished-import,import/no-unresolved

manager.init({
	repositoryType: "multi-package",
	dist: {
		node: true,
	},
	tasks: {
		prepare: {
			postRun: ({ terminal }) => {
				terminal.print(`Sync Node.js version in all package.json`).spacer();

				const nodeVersion = fss.readJson(fileURLToPath(new URL("package.json", import.meta.url))).engines.node;

				fss.scandir(fileURLToPath(new URL("packages", import.meta.url)), "dir", { fullPath: true }).forEach((root) => {
					const packageFile = `${root}/package.json`;
					const packageData = fss.readJson(packageFile);
					packageData.engines.node = nodeVersion;
					fss.writeJson(packageFile, packageData, { space: 2 });
				});
			},
		},
	},
});
