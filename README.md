# Dotpulse.OutdatedBrowser

[![Latest Stable Version](https://poser.pugx.org/dotpulse/outdatedbrowser/v/stable)](https://packagist.org/packages/dotpulse/outdatedbrowser)
[![Total Downloads](https://poser.pugx.org/dotpulse/outdatedbrowser/downloads)](https://packagist.org/packages/dotpulse/outdatedbrowser)
[![License](https://poser.pugx.org/dotpulse/outdatedbrowser/license)](https://packagist.org/packages/dotpulse/outdatedbrowser)

This package includes [Outdated Browser](http://outdatedbrowser.com/) into [Neos CMS](https://www.neos.io). You can configure in your [`Settings.yaml`](Configuration/Settings.yaml) when the warning should be shown.

| Version | Neos   |
|---------|--------|
| 0.2.*   | 2.*    |
| 1.*     | 3.*    |

## Installation

Most of the time you have to make small adjustments to a package (e.g. configuration in [`Settings.yaml`](Configuration/Settings.yaml)). Because of that, it is important to add the corresponding package to the composer from your theme package. Mostly this is the site packages located under `Packages/Sites/`. To install it correctly go to your theme package (e.g.`Packages/Sites/Foo.Bar`) and run following command:
```
composer require dotpulse/outdatedbrowser --no-update
```

To install the package under Neos 2.* you have to enter
```
composer require "dotpulse/outdatedbrowser:^0.2" --no-update
```

The `--no-update` command prevent the automatic update of the dependencies. After the package was added to your theme `composer.json`, go back to the root of the Neos installation and run `composer update`. Et voilà! Your desired package is now installed correctly.

## License

Licensed under MIT, see [LICENSE](LICENSE)
