# Microsoft 365 Web for Linux (Unofficial)

Unofficial Electron desktop wrappers for Microsoft Excel, Word, and PowerPoint for the web, packaged for Linux desktops.

**This project is not affiliated with, endorsed by, or an official product of Microsoft Corporation.**

## Applications

| Application | Website | Flatpak application ID |
|---|---|---|
| Excel Web | https://excel.cloud.microsoft/ | `io.github.zetenyke11.excelweb` |
| Word Web | https://word.cloud.microsoft/ | `io.github.zetenyke11.wordweb` |
| PowerPoint Web | https://powerpoint.cloud.microsoft/ | `io.github.zetenyke11.powerpointweb` |

These applications display Microsoft's online services in separate Electron desktop windows. An internet connection and a Microsoft account may be required for some features.

## Supported packages

Prebuilt packages are intended for these architectures:

- **x86-64 (AMD64)**
- **ARM64 (AArch64)**

Package formats:

- Debian packages (`.deb`)
- RPM packages (`.rpm`)
- Flatpak bundles (`.flatpak`)

ARM64 packages have been built but have not yet been verified on physical ARM64 hardware. Availability of compatible runtimes and system dependencies may vary by distribution.

## Installation

Download the package for your application, distribution, and architecture from the project's [GitHub Releases](https://github.com/zetenyke11/m365-linux/releases).

### Debian, Ubuntu, and Linux Mint

Install the appropriate AMD64 or ARM64 `.deb` package:

```bash
sudo apt install ./PACKAGE.deb
```

Replace `PACKAGE.deb` with the downloaded file's actual name.

### Fedora and other RPM-based distributions

Install the appropriate RPM package:

```bash
sudo dnf install ./PACKAGE.rpm
```

Replace `PACKAGE.rpm` with the downloaded file's actual name.

### Flatpak

Install a downloaded Flatpak bundle for your user:

```bash
flatpak install --user --bundle ./PACKAGE.flatpak
```

Launch the application using its application ID listed in the table above. For example:

```bash
flatpak run io.github.zetenyke11.excelweb
```

Replace the example ID with the ID of the application you installed.

## Building from source

Requirements include Node.js, npm, and the dependencies required by Electron and electron-builder. Flatpak builds additionally require the relevant Flatpak tooling.

Clone the repository:

```bash
git clone https://github.com/zetenyke11/m365-linux.git
cd m365-linux
```

Choose an application directory:

```bash
cd excel
```

Install dependencies and run the application:

```bash
npm install
npm start
```

To build Debian and RPM packages for x86-64:

```bash
npm run build:linux -- --x64
```

To build them for ARM64:

```bash
npm run build:linux -- --arm64
```

To build Flatpak bundles:

```bash
npx electron-builder --linux flatpak --x64
npx electron-builder --linux flatpak --arm64
```

Build outputs are placed in the application's `dist/` directory. Repeat these steps from `word/` or `powerpoint/` to build the other applications. Cross-architecture builds should be tested on the target architecture before being considered fully verified.

## License

The wrapper source code is licensed under the **GNU General Public License v2.0 only**. See [`LICENSE.txt`](LICENSE.txt) for the complete license text.

This license does not apply to Microsoft's websites, services, trademarks, or other Microsoft-owned materials. Their respective terms and licenses continue to apply.

## Disclaimer

Microsoft, Microsoft 365, Excel, Word, and PowerPoint are trademarks of Microsoft Corporation. These names are used only to identify the online services with which these unofficial wrappers interact.

This project is community-developed software. It is provided without warranty, as permitted by the GPL-2.0-only license. Users remain responsible for complying with Microsoft's terms and applicable laws.

## Contributions

Contributions, bug reports, and improvements are welcome. Please test changes carefully and avoid including credentials, access tokens, or other sensitive information in issues or pull requests.
