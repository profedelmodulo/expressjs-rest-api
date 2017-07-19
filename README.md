[![Dependency Status](https://david-dm.org/johnchar/restapi/status.svg)](https://david-dm.org/johnchar/restapi)

# expressjs-rest-api
Simple RESTful API starter kit with JWT authentication
## Installation
1. Clone the repo

```
git clone https://github.com/devphile/restapi
```
2. Install npm dependencies

```
npm install
```
3. Set your environment variables

> There is a `.env.example` file included, it needs to be renamed to `.env` which includes some variables that need to be set according to your environment. Some example variables include the `PORT` number  and the `MongoDB` URI.

## Usage

* Authentication Flow

    1. Send a POST request with an `email` and `password` as parameters to `/api/users` to create a new user.
    2. Send a POST request with user credentials as parameters to `/api/auth` and receive a token.
    3. Pass the token in the Headers of a request as `x-access-token` to access protected endpoints.

## TODOs
    1. Add logic to some empty functions in `src/objects/user/user.controller.js`
    2. Add unit tests

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## License
[MIT](license.txt)