
## Licence


[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)


## Exemple d'utilisation


```js
import License from './CucumberAPSLib';

const token = License.init('YOUR_LICENSE_KEY')

//CLASSIC
const classic_verify = License.verify(token)

//CSAP
const link = License.getCsapLink(token)
const callback = License.getCsapCallback(token) // Remember to store the csap token in a file 
const csap_verify = License.getCsapEndpoint('YOUR_CSAP_TOKEN_CALLBACK')
```


## Créateur

- [@MathisAudureau](https://github.com/MathisAudureau) Portage de la lib en TS

- [@Asuniia](https://github.com/Asuniia)
