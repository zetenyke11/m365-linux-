# Microsoft 365 Web for Linux (Unofficial)

Unofficial Electron desktop wrappers for Microsoft Excel, Word, and PowerPoint for the web, packaged for Linux desktops.

**This project is not affiliated with, endorsed by, or an official product of Microsoft Corporation.**

## Applications

| **Application** | **Website** | **Flatpak application ID** |
|---|---|---|
| Excel Web | [excel.cloud.microsoft](https://excel.cloud.microsoft/) | `io.github.zetenyke11.excelweb` |
| Word Web | [word.cloud.microsoft](https://word.cloud.microsoft/) | `io.github.zetenyke11.wordweb` |
| PowerPoint Web | [powerpoint.cloud.microsoft](https://powerpoint.cloud.microsoft/) | `io.github.zetenyke11.powerpointweb` |

These applications display Microsoft's online services in separate Electron desktop windows. An internet connection and a Microsoft account may be required for some features.

## Downloads

Download the latest release from [GitHub Releases](https://github.com/zetenyke11/m365-linux-/releases/latest).

Prebuilt packages are available for the following architectures:

- **x86-64 (AMD64)**
- **ARM64 (AArch64)**

Available package formats:

- Debian packages (`.deb`)
- RPM packages (`.rpm`)
- Flatpak bundles (`.flatpak`)

ARM64 packages have been built but have not yet been verified on physical ARM64 hardware. Availability of compatible runtimes and system dependencies may vary by distribution.

## Installation

Download the package for your application, distribution, and architecture from the [latest release](https://github.com/zetenyke11/m365-linux-/releases/latest).

### Debian, Ubuntu, and Linux Mint

Install the downloaded `.deb` package:

```bash
sudo apt install ./excel-web-unofficial_1.0.0_amd64.deb
```

This is an example for Excel on AMD64. Use the actual filename of the package you downloaded; Word and PowerPoint packages have different filenames.

### Fedora and other RPM-based distributions

Install the downloaded `.rpm` package:

```bash
sudo dnf install ./excel-web-unofficial-1.0.0.x86_64.rpm
```

Use the matching filename for your application and architecture.

### Flatpak

Install the downloaded Flatpak bundle for your user:

```bash
flatpak install --user --bundle "./Excel Web (Unofficial)-1.0.0-x86_64.flatpak"
```

Launch Excel using its application ID:

```bash
flatpak run io.github.zetenyke11.excelweb
```

For Word or PowerPoint, use the corresponding application ID listed in the table above.

## Building from source

Requirements include Node.js, npm, and the dependencies required by Electron and electron-builder. Flatpak builds additionally require the relevant Flatpak tooling.

Clone the repository:

```bash
git clone https://github.com/zetenyke11/m365-linux-.git
cd m365-linux-
```

Choose an application directory. For example, to build Excel:

```bash
cd excel
```

Install dependencies and run the application:

```bash
npm install
npm start
```

### Building Debian and RPM packages

To build packages for x86-64:

```bash
npm run build:linux -- --x64
```

To build packages for ARM64:

```bash
npm run build:linux -- --arm64
```

### Building Flatpak bundles

To build an x86-64 Flatpak:

```bash
npx electron-builder --linux flatpak --x64
```

To build an ARM64 Flatpak:

```bash
npx electron-builder --linux flatpak --arm64
```

Build outputs are placed in the application's `dist/` directory. Repeat these steps from `word/` or `powerpoint/` to build the other applications. Cross-architecture builds should be tested on the target architecture before being considered fully verified.

## License

The wrapper source code is licensed under the **GNU General Public License v2.0 only**. See [`LICENSE.txt`](https://github.com/zetenyke11/m365-linux-/blob/main/LICENSE.txt) for the complete license text.

This license does not apply to Microsoft's websites, services, trademarks, or other Microsoft-owned materials. Their respective terms and licenses continue to apply.

## Disclaimer

Microsoft, Microsoft 365, Excel, Word, and PowerPoint are trademarks of Microsoft Corporation. These names are used only to identify the online services with which these unofficial wrappers interact.

This project is community-developed software. It is provided without warranty, as permitted by the GPL-2.0-only license. Users remain responsible for complying with Microsoft's terms and applicable laws.

## Contributions

Contributions, bug reports, and improvements are welcome. Please test changes carefully and avoid including credentials, access tokens, or other sensitive information in issues or pull requests.
