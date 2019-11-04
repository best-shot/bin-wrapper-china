# bin-wrapper-china

Binary mirror download link replacement for mainland China.

Fork from [bin-wrapper](https://github.com/kevva/bin-wrapper).

## Install

Use `yarn` to replace `bin-wrapper`.

```json
// package.json
{
	"resolutions": {
		"bin-wrapper": "npm:bin-wrapper-china"
	}
}
```

```bash
yarn install
```

## API

Same as `bin-wrapper`.

## Inject mirror url to `process.env`

```json
// package.json
{
	"scripts": {
		"preinstall": "china-bin-env"
	}
}
```

## Related

<https://github.com/cnpm/binary-mirror-config>
