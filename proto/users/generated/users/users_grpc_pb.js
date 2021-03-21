// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var users_pb = require('./users_pb.js');

function serialize_users_CanApproveToUserRequest(arg) {
  if (!(arg instanceof users_pb.CanApproveToUserRequest)) {
    throw new Error('Expected argument of type users.CanApproveToUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_CanApproveToUserRequest(buffer_arg) {
  return users_pb.CanApproveToUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_CanApproveToUserResponse(arg) {
  if (!(arg instanceof users_pb.CanApproveToUserResponse)) {
    throw new Error('Expected argument of type users.CanApproveToUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_CanApproveToUserResponse(buffer_arg) {
  return users_pb.CanApproveToUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_FindUserByNameRequest(arg) {
  if (!(arg instanceof users_pb.FindUserByNameRequest)) {
    throw new Error('Expected argument of type users.FindUserByNameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_FindUserByNameRequest(buffer_arg) {
  return users_pb.FindUserByNameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_FindUserByNameResponse(arg) {
  if (!(arg instanceof users_pb.FindUserByNameResponse)) {
    throw new Error('Expected argument of type users.FindUserByNameResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_FindUserByNameResponse(buffer_arg) {
  return users_pb.FindUserByNameResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_GetApproverInfoRequest(arg) {
  if (!(arg instanceof users_pb.GetApproverInfoRequest)) {
    throw new Error('Expected argument of type users.GetApproverInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_GetApproverInfoRequest(buffer_arg) {
  return users_pb.GetApproverInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_GetApproverInfoResponse(arg) {
  if (!(arg instanceof users_pb.GetApproverInfoResponse)) {
    throw new Error('Expected argument of type users.GetApproverInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_GetApproverInfoResponse(buffer_arg) {
  return users_pb.GetApproverInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_GetByIDRequest(arg) {
  if (!(arg instanceof users_pb.GetByIDRequest)) {
    throw new Error('Expected argument of type users.GetByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_GetByIDRequest(buffer_arg) {
  return users_pb.GetByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_GetByMailOrTRequest(arg) {
  if (!(arg instanceof users_pb.GetByMailOrTRequest)) {
    throw new Error('Expected argument of type users.GetByMailOrTRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_GetByMailOrTRequest(buffer_arg) {
  return users_pb.GetByMailOrTRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_GetUserResponse(arg) {
  if (!(arg instanceof users_pb.GetUserResponse)) {
    throw new Error('Expected argument of type users.GetUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_GetUserResponse(buffer_arg) {
  return users_pb.GetUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UsersService = exports.UsersService = {
  getUserByMailOrT: {
    path: '/users.Users/GetUserByMailOrT',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.GetByMailOrTRequest,
    responseType: users_pb.GetUserResponse,
    requestSerialize: serialize_users_GetByMailOrTRequest,
    requestDeserialize: deserialize_users_GetByMailOrTRequest,
    responseSerialize: serialize_users_GetUserResponse,
    responseDeserialize: deserialize_users_GetUserResponse,
  },
  getUserByID: {
    path: '/users.Users/GetUserByID',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.GetByIDRequest,
    responseType: users_pb.GetUserResponse,
    requestSerialize: serialize_users_GetByIDRequest,
    requestDeserialize: deserialize_users_GetByIDRequest,
    responseSerialize: serialize_users_GetUserResponse,
    responseDeserialize: deserialize_users_GetUserResponse,
  },
  findUserByName: {
    path: '/users.Users/FindUserByName',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.FindUserByNameRequest,
    responseType: users_pb.FindUserByNameResponse,
    requestSerialize: serialize_users_FindUserByNameRequest,
    requestDeserialize: deserialize_users_FindUserByNameRequest,
    responseSerialize: serialize_users_FindUserByNameResponse,
    responseDeserialize: deserialize_users_FindUserByNameResponse,
  },
  getApproverInfo: {
    path: '/users.Users/GetApproverInfo',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.GetApproverInfoRequest,
    responseType: users_pb.GetApproverInfoResponse,
    requestSerialize: serialize_users_GetApproverInfoRequest,
    requestDeserialize: deserialize_users_GetApproverInfoRequest,
    responseSerialize: serialize_users_GetApproverInfoResponse,
    responseDeserialize: deserialize_users_GetApproverInfoResponse,
  },
  canApproveToUser: {
    path: '/users.Users/CanApproveToUser',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.CanApproveToUserRequest,
    responseType: users_pb.CanApproveToUserResponse,
    requestSerialize: serialize_users_CanApproveToUserRequest,
    requestDeserialize: deserialize_users_CanApproveToUserRequest,
    responseSerialize: serialize_users_CanApproveToUserResponse,
    responseDeserialize: deserialize_users_CanApproveToUserResponse,
  },
};

exports.UsersClient = grpc.makeGenericClientConstructor(UsersService);
