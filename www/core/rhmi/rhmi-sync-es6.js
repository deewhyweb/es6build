import {
    createClient,
    VoyagerClient,
    DataSyncConfig,
    OfflineQueueListener,
    ConflictListener,
    AuthContextProvider
  } from "@aerogear/voyager-client";
  import gql from "graphql-tag";
  angular
    .module('phoenix.core.rhmi.sync.poc', [])
    .factory('rhmiSync', function() {
    //$scope.message = "Hello World";
    const config = {
      httpUrl: "http://localhost:8001/graphql",
      wsUrl: "ws://localhost:8001/graphql"
    };
  
    createClient(config).then(client => {
      client
        .query({
          fetchPolicy: "network-only",
          query: gql`
            query allTasks {
              allTasks {
                name
              }
            }
          `
        })
        //Print the response of the query
        .then(({ data }) => {
            console.log(data);
        });
    });
  });
  