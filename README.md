# kakesandkakos


# KSpot Client

Table of contents
  - [`.KSpot_Client/`](#KSpot Client)
  - [`.vscode/`](#vscode)
    - [Useful vscode extensions](#useful-vscode-extensions)
  - [`android/` - Android required files](#android---android-required-files)
  - [`ios/` - iOS required files](#ios---ios-required-files)
  - [`lib/` - Flutter application](#lib---flutter-application)




## `.KSpot_Client/`
# KSpot Client

This repo is intended to house the mobile client and the admin UI for the kinderspot application.

See individual READMEs for individual project instructions.


## Included Projects
	- kspot_linting
		- This project is meant to house our linting rules shared amongst the various flutter projects
	- kspot_shared
		- Our primary project for managing data flow / interacting with the database
	- kspot_ui
		- Shared widgets
	- mobile_client
		- The primary consumer mobile application
	- web_admin
		- A web first admin interface


## Development

We are currently using Flutter 1.24.0-10.2.pre on the beta channel.

When you first clone the repo, be sure to fetch dependencies:

```sh
flutter pub get
```
Don't forget to fetch dependencies any time a `pubspec.yaml` file is changed!

### Scripts

Using [Derry](https://pub.dev/packages/derry), we can easily run scripts!

```
derry build # Run build runner!
derry strings # Generate strings from ARB file
```

Scripts are defined in pubspec.yaml:

```yaml
	scripts:
		build: flutter pub run build_runner build --delete-conflicting-outputs
		...
```

### Static Analysis

Static analysis settings are stored in the project's `analysis_options.yaml` file and automatically used by `dartfmt` and `dartfix`, etc.

Currently, the analysis options are set to Google's [Pedantic linter rules](https://pub.dev/packages/pedantic) to create a consistent code style. 

To be able to fix all automatically fixable errors in one easy step, simply install [dartfix](https://pub.dev/documentation/dartfix/latest/#installing-and-updating-dartfix):

```sh
flutter pub global activate dartfix
```
To fix all automatically-fixable errors, run the following from the project directory:

```sh
dartfix --pedantic lib/ --overwrite
```

### Generated Code

The following packages rely on [build_runner](https://dart.dev/tools/build_runner) to generate code:

- [auto_route](https://pub.dev/packages/auto_route)

To generate code automatically for the above packages, run the following:

```sh
flutter pub run build_runner build --delete-conflicting-outputs
```

### Internationalization & Localization

Even though English is the only supported language we have adopted best practices for localizing text to ensure that user-facing strings are contained in separate files to enable them to be edited easily or other languages to be added.

Because Flutter recently changed how localization works, we have adopted the practices described in the [Flutter Internationalization User Guide](https://flutter.dev/go/i18n-user-guide) since the [current documentation](https://flutter.dev/docs/development/accessibility-and-localization/internationalization) is somewhat out of date. See [this GitHub issue](https://github.com/flutter/flutter/issues/41437) for the history.

The internationalization system relies on Flutter code generation that happens when the application is run. This capability is built into the Flutter tooling and is not directly related to `build_runner`.

You can manually run the localization generator and see it's command-line options:

```sh
flutter gen-l10n -h
```

Or, to generate localization string classes without having to run the app:

```sh
derry strings
```

To control localization string class generation, a `l10n.yaml` file has been added to the project directory which specifies options for the `gen-l10n` tooling which is executed on run:

```yaml
arb-dir: lib/l10n
template-arb-file: app_en.arb
output-localization-file: app_localizations.dart
synthetic-package: false
```

The `l10n.yaml` file specifies the location of strings `*.arb` files, the generated class names, and other options as described in the guide linked above.

Per the localization guide:

> The template-arb-file is an ARB format message catalog for one, convenient,
> locale which defines all of the messages that the application supports.

Valid example template `*.arb` file:

```json
{
	"@@locale": "en",
	"helloWorld": "Hello World!",
	"@helloWorld": {
		"description": "The conventional newborn programmer greeting"
	}
}
```

As such, strings must be top level keys. The following is not allowed:

```json
{
	"@@locale": "en",
	"parent": {
		"child": "child text" // This kind of nesting is not allowed
	}
}
```

Strings can be accessed in-app via the following:

```dart
import 'package:kspot_client/l10n/app_localizations.dart';
// ...
Text(AppLocalizations.of(context).helloWorld)
```

--- 

**IMPORTANT:** Without `synthetic-package` set to `true` the generated files would be stored in `.dart_tool/flutter_gen/gen_l10n/`. Additionally, you must specify additional settings in the `pubspec.yaml` file to enable this functionality and import the classes via `import 'package:flutter_gen/gen_l10n/app_localizations.dart';`.

**Storing the generated files in `.dart_tool/flutter_gen` breaks other code generation performed with `build_runner` because of a bug in Flutter 1.22.4.**

By turning `synthetic-package` to `false`, we are able to generate localization string classes in the `arb-dir` specified in the `l10n.yaml` file, keeping them in the project.

---

Note: if you encounter errors, remember this from the guide:

> When running the Flutter app, the IDE may present you with a warning
> indicating that build errors exist in your project. This is because the
> localizations code will need to be generated for the first time (note that
> the warnings should be about the missing import and AppLocalizations class
> not existing). Proceed to run the Flutter application, which should generate
> your localizations code. For example, in VSCode, you can run the Flutter app
> by selecting “Debug Anyway” in the build error dialog that appears.

### Flutter Beta

If for some reason you need to access Flutter Beta, here's how. Make sure you do this on a separate branch as the dependencies of the project typically have to be upgraded.

```sh
# Steps to use beta Flutter (not recommended, but possible)
flutter channel beta
flutter upgrade
flutter pub upgrade
flutter pub get
```
 
Use caution—upgrading is much easier than downgrading, but doing the steps above after changing the channel back to `stable` and deleting the `pubspec.lock` file will usually get you pretty close.





















Table of contents
- [Architecture](#architecture)
  - [`.About Project/`](#admin)  
    - [Why](#why)
    - [Overview](#overview)
    - [`application/`](#application)
      - [`admin/`](#constants)
      - [`generators/`](#coordinator)
      - [`src/` (views)](#pages-views)
      - [`utilities/`](#theme) 
    - [`Bash Files`](#Bash)
      - [`intro/`](#constants)

## `.About Project/` 
###  Why
###  Overview
###  Application

## `.admin/` 
> You can skip this explanation, this is just an overview on the topic of why we have decided to go with this particular

Admin portal that allows the admins to delete, fetch or modify reservation data.

## `.generators/`

 This contains a generator that will allow the user to generate a new project.
 
 ## `.src/`

 Main location of the project
 
  
 ## `.utilities/`

 Utility files
 
  ## `.intro/`
 If files do not exist use generator to create a project for you.generators bash make.bash will display date and will prompt you for entry of file name

