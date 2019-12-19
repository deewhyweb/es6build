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
  //$scope.message = "Hello World";
  const config = {
    httpUrl: "http://localhost:8001/graphql",
    wsUrl: "ws://localhost:8001/graphql"
  };

  const TASKS_SUBSCRIPTION = gql`
  query allTasks {
    allTasks {
      projectId
      projectNumber
      ebsProjectName
      projectName
      lastUpdateDate
      creationDate
      startDate
      endDate
      branchNo
      costCenter
      enabledFlag
      projectType
      taskNumber
      taskID
      taskName
      taskStartDate
      taskEndDate
      curentDate
      expenditureTypes
    }
  }
`
  function getAllTasks(cb) {
    createClient(config).then(client => {
      client
        .query({
          fetchPolicy: "network-only",
          query: TASKS_SUBSCRIPTION
        })
        //Print the response of the query
        .then(({ data }) => {
          cb(null, data.allTasks);
        })
        .catch(err => {
          cb(err);
        });
    });
  }
  function subscribeToTasks() {
    createClient(config).then(client => {
      const tasks = client.watchQuery({
        fetchPolicy: "network-only",
        query: TASKS_SUBSCRIPTION
      });

      tasks.subscribeToMore({
        document: TASKS_SUBSCRIPTION,
        updateQuery: (prev, { subscriptionData }) => {
          // Update logic here.
        }
      });
      return tasks;
    });
  }
  return {
    getAllTasks,
    subscribeToTasks
  };
});
