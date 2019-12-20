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
    httpUrl: "https://tech-connect-tech-connect-test.e785.tke-2.openshiftapps.com/graphql",
    wsUrl: "ws://tech-connect-tech-connect-test.e785.tke-2.openshiftapps.com/graphql"
  };

  const GET_ADMIN_TASKS = gql`
  query getAdminTasks($branchNumber: Int, $costCenter: Int) {
    getAdminTasks(fields: {branchNumber: $branchNumber, costCenter: $costCenter}) {
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
    //TODO if branchNumber or costCenter are null, should we return all or none?
    createClient(config).then(client => {
      client
        .query({
          fetchPolicy: "network-only",
          query: GET_ALL_ADMIN_TASKS
          //variables: {'branchNumber': branchNumber, 'costCenter': costCenter}
        })
        //Print the response of the query
        .then(({ data }) => {
          console.log('DAVE: ', data);
          cb(null, data.getAllAdminTasks);
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
    subscribeToTasks
  };
});
