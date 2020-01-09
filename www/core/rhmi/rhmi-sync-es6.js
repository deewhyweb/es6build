"use strict";
import {
  createClient,
  VoyagerClient,
  DataSyncConfig,
  OfflineQueueListener,
  ConflictListener,
  AuthContextProvider
} from "@aerogear/voyager-client";
import gql from "graphql-tag";
angular.module("phoenix.core.rhmi.sync", []).factory("rhmiSync", function() {
  const config = {
    httpUrl: "http://localhost:8004/graphql",
    wsUrl: "ws://localhost:8004/graphql"
  };

  const clientPromise = createClient(config);

  function getClient() {
    return Promise.resolve(clientPromise);
  }

  function initializeQuery(query) {
    return gql(query);
  }
  return {
    getClient,
    initializeQuery
  };
});
