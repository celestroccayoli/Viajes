/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


/* Amplify Params - DO NOT EDIT
	API_AMCHAMVIAJES_GRAPHQLAPIENDPOINTOUTPUT
	API_AMCHAMVIAJES_GRAPHQLAPIIDOUTPUT
	API_AMCHAMVIAJES_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
	STORAGE_S3APPVIAJESSTORAGEA0303568_BUCKETNAME
Amplify Params - DO NOT EDIT */
const AWS = require('aws-sdk');
const sharp = require('sharp');
const axios = require('axios');
const gql = require('graphql-tag');
const graphql = require('graphql');
const { print } = graphql;
const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

const S3 = new AWS.S3({
  signatureVersion: 'v4',
}) 

const listParticipantes = gql`
  query ListParticipantes {
  listParticipantes (filter: { and : {imagen: { notContains: "" }, imagen: { notContains: "http" }, imagen64: { notContains: "" }} }) {
    items {
      id
      imagen
      imagen64
      _deleted
    }
  }
}
`

const updateParticipante = gql`
mutation updateParticipante($input: UpdateParticipanteInput!) {
    updateParticipante(input: $input) {
        id
    }
}
`


// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

/**********************
 * Example get method *
 **********************/

app.get('/', async function(req, res) {
  // Add your code here
  const graphqlData = await axios({
    url: process.env.API_AMCHAMVIAJES_GRAPHQLAPIENDPOINTOUTPUT,
    method: 'post',
    headers: {
      'x-api-key': process.env.API_AMCHAMVIAJES_GRAPHQLAPIKEYOUTPUT
    },
    data: {
      query: print(listParticipantes),
    }
  });
  const procesar = [];
  const finalizado = [];
  if (graphqlData.data.data?.listParticipantes) {
    const imgReady = graphqlData.data.data.listParticipantes.items.filter(participante => !participante._deleted && participante.imagen !=='' && participante.imagen!==null);
    if (imgReady.length>0) {
      imgReady.forEach(async (participante) => {
        procesar.push(participante.id);
        const file = await S3.getObject({ Bucket: process.env.STORAGE_S3APPVIAJESSTORAGEA0303568_BUCKETNAME, Key: `public/images/${participante.imagen}` }).promise()
        const imagen = await sharp(file.Body)
        .resize(300, 300, {
          fit: sharp.fit.inside,
          withoutEnlargement: true
        })
        .toBuffer();
        const ready = await updateQuery(imagen, participante.id);
        finalizado.push(ready.data.data.updateParticipante.id);
        if (isReady(procesar, finalizado)) {
          res.json({success: finalizado.length, url: req.url})
        }
      });
    } else {
      res.json({success: true, url: req.url})
    }
  }  
});

function isReady (list=[], process=[]) {
  if (list.length===process.length) {
    return true;
  }
  return false;
} 

async function updateQuery (data, id) {
  return await axios({
    url: process.env.API_AMCHAMVIAJES_GRAPHQLAPIENDPOINTOUTPUT,
    method: 'post',
    headers: {
      'x-api-key': process.env.API_AMCHAMVIAJES_GRAPHQLAPIKEYOUTPUT
    },
    data: {
      query: print(updateParticipante),
      variables: {
        "input": {
            "id" : id,
            "imagen64": data.toString('base64')
        }
      }
    }
  });
}

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
