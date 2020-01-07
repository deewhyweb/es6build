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

  //const clientPromise = createClient(config);

  const GET_ADMIN_TASKS = gql`
  query getAdminTasks($branchNumber: String!, $costCenter: String!) {
    getAdminTasks(branchNo: $branchNumber, costCenter: $costCenter) {
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
const GET_ALL_ADMIN_TASKS = gql`
query getAllAdminTasks {
  getAllAdminTasks {
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
  function getAllAdminTasks(cb) {
    createClient(config).then(client => {
      client
        .query({
          fetchPolicy: "network-only",
          query: GET_ALL_ADMIN_TASKS
        })
        .then(({ data }) => {
          cb(null, data.getAllAdminTasks);
        })
        .catch(err => {
          cb(err);
        });
    });
  }

  function getAdminTasks(branchNo, costCenter, cb) {
    const query = {
      fetchPolicy: "network-only",
      query: GET_ADMIN_TASKS,
      variables: {'branchNumber': branchNo, 'costCenter': costCenter}
    };
    createClient(config).then(client => {
      client
        .query(query)
        .then(({ data }) => {
          cb(null, data.getAdminTasks);
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
        query: GET_ALL_ADMIN_TASKS
      });

      tasks.subscribeToMore({
        document: GET_ALL_ADMIN_TASKS,
        updateQuery: (prev, { subscriptionData }) => {
          // Update logic here.
        }
      });
      return tasks;
    });
  }
  return {
    getAllAdminTasks,
    getAdminTasks,
    subscribeToTasks
  };
});
