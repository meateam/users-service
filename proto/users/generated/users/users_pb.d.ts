// package: users
// file: users/users.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetByMailRequest extends jspb.Message { 
    getMail(): string;
    setMail(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetByMailRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetByMailRequest): GetByMailRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetByMailRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetByMailRequest;
    static deserializeBinaryFromReader(message: GetByMailRequest, reader: jspb.BinaryReader): GetByMailRequest;
}

export namespace GetByMailRequest {
    export type AsObject = {
        mail: string,
    }
}

export class GetByIDRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getDestination(): string;
    setDestination(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetByIDRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetByIDRequest): GetByIDRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetByIDRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetByIDRequest;
    static deserializeBinaryFromReader(message: GetByIDRequest, reader: jspb.BinaryReader): GetByIDRequest;
}

export namespace GetByIDRequest {
    export type AsObject = {
        id: string,
        destination: string,
    }
}

export class User extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getMail(): string;
    setMail(value: string): void;

    getFirstname(): string;
    setFirstname(value: string): void;

    getLastname(): string;
    setLastname(value: string): void;

    getFullname(): string;
    setFullname(value: string): void;

    clearHierarchyList(): void;
    getHierarchyList(): Array<string>;
    setHierarchyList(value: Array<string>): void;
    addHierarchy(value: string, index?: number): string;

    getHierarchyflat(): string;
    setHierarchyflat(value: string): void;


    hasDomainuser(): boolean;
    clearDomainuser(): void;
    getDomainuser(): DomainUser | undefined;
    setDomainuser(value?: DomainUser): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        id: string,
        mail: string,
        firstname: string,
        lastname: string,
        fullname: string,
        hierarchyList: Array<string>,
        hierarchyflat: string,
        domainuser?: DomainUser.AsObject,
    }
}

export class DomainUser extends jspb.Message { 
    getUniqueid(): string;
    setUniqueid(value: string): void;

    getAdfsuid(): string;
    setAdfsuid(value: string): void;

    getDatasource(): string;
    setDatasource(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DomainUser.AsObject;
    static toObject(includeInstance: boolean, msg: DomainUser): DomainUser.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DomainUser, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DomainUser;
    static deserializeBinaryFromReader(message: DomainUser, reader: jspb.BinaryReader): DomainUser;
}

export namespace DomainUser {
    export type AsObject = {
        uniqueid: string,
        adfsuid: string,
        datasource: string,
    }
}

export class GetUserResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): User | undefined;
    setUser(value?: User): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserResponse): GetUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserResponse;
    static deserializeBinaryFromReader(message: GetUserResponse, reader: jspb.BinaryReader): GetUserResponse;
}

export namespace GetUserResponse {
    export type AsObject = {
        user?: User.AsObject,
    }
}

export class FindUserByNameRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    getDestination(): string;
    setDestination(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindUserByNameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FindUserByNameRequest): FindUserByNameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindUserByNameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindUserByNameRequest;
    static deserializeBinaryFromReader(message: FindUserByNameRequest, reader: jspb.BinaryReader): FindUserByNameRequest;
}

export namespace FindUserByNameRequest {
    export type AsObject = {
        name: string,
        destination: string,
    }
}

export class FindUserByNameResponse extends jspb.Message { 
    clearUsersList(): void;
    getUsersList(): Array<User>;
    setUsersList(value: Array<User>): void;
    addUsers(value?: User, index?: number): User;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindUserByNameResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FindUserByNameResponse): FindUserByNameResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindUserByNameResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindUserByNameResponse;
    static deserializeBinaryFromReader(message: FindUserByNameResponse, reader: jspb.BinaryReader): FindUserByNameResponse;
}

export namespace FindUserByNameResponse {
    export type AsObject = {
        usersList: Array<User.AsObject>,
    }
}
