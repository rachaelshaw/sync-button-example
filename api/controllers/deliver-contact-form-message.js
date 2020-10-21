module.exports = {


  friendlyName: 'Deliver contact form message',


  description: 'Deliver a contact form message to the appropriate internal channel(s).',


  inputs: {

  },


  exits: {

    success: {
      outputType: {},
      outputDescription: 'Some data'
    }

  },


  fn: async function({}) {

    var responseData = [{
      foo: 'bar'
    }];

    return responseData;

  }


};
