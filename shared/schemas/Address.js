const mongoose = require('mongoose')
const {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
} = require('graphql')
const { Countries } = require('../constants/countries')

const mongooseSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true,
        validate: {
            validator(v) {
                return Countries.asArrayOfName.indexOf(v) !== -1
            },
            message: props => `${props.value} is not a valid country`,
        },
    },
    addressLine: {
        type: String,
        required: true,
    },
    addressLine2: {
        type: String,
    },
    city: {
        type: String,
        required: true,
    },
    postalCode: {
        type: String,
        required: true,
    },
    venueName: {
        type: String,
    },
})

const graphqlSchema = new GraphQLObjectType({
    name: 'Address',
    fields: () => ({
        country: {
            type: GraphQLNonNull(GraphQLString),
        },
        addressLine: {
            type: GraphQLNonNull(GraphQLString),
        },
        addressLine2: {
            type: GraphQLString,
        },
        city: {
            type: GraphQLNonNull(GraphQLString),
        },
        postalCode: {
            type: GraphQLNonNull(GraphQLString),
        },
        venueName: {
            type: GraphQLString,
        },
    }),
})

module.exports = {
    mongoose: mongooseSchema,
    graphql: graphqlSchema,
}
