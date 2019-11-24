# API

## Introduction

The purpose of the API layer is to control the business logic of the product.

This is managed by a combination of Node.js, Express.js and various npm libraries.

## Usage - Expanded - needs to be updated with final routes for phase2

### Validation

Validation of each route currently checks for:

1) null values
1) data types
1) data length
1) data min / max

### Routes

#### /postForm

Basic form data validator.

Important files:

```
- routes/postForm.js
- middlewares/postFormValidation.js
- utils/validation.js
```

Validation breakdown:

```angular2html

{
   "stringType": "must be a string",
   "stringLength": "string length must be greater than 10",
   "numberType": 13, < ---- must be a number
   "numberMax": 12 <---- must be greater than 10.
 }

```

Sample request body:

```angular2html

{
   "stringType": "asdfasasdf",
   "stringLength": "asdfasdfadsfdsfdasfdsfdsfadsf",
   "numberType": 13,
   "numberMax": 12
 }

```

Upon success, expected response: 

```angular2html
{ 
   "status":"postForm request validated!",
   "result":"validated",
   "formValues":{ 
      "stringType":"asdfasasdf",
      "stringLength":"asdfasdfadsfdsfdasfdsfdsfadsf",
      "numberType":13,
      "numberMax":12
   }
}
```

