import { createClient } from "urql";
import _ from "lodash";
import { convertToDayId } from "../utils/convertToDayId";
import { types } from "mobx-state-tree";

const URL = "https://api.thegraph.com/subgraphs/name/lekg1/melaliebasic01";

const fetchStakesPerDay = async (startDate, endDate) => {
  const query = `
        query {
          stakePerDays(
              where: { id_gte: ${convertToDayId(startDate)} id_lte: ${convertToDayId( endDate )} },
        orderBy: id, 
        orderDirection: asc
        ) {
          id
          stakeCreatedCount
          stakeCreatedSum
          stakeRemovedCount
          stakeRemovedSum
          totalStake
        }
      }`;

  const client = createClient({ url: URL, });

  let stakesMap = new Map();
  for (let i = convertToDayId(startDate); i <= convertToDayId(endDate); i++) {
    stakesMap.set(i, {
      id: i,
      stakeCreatedCount: 0,
      stakeCreatedSum: 0,
      stakeRemovedCount: 0,
      stakeRemovedSum: 0,
      totalStake: 0,
    });
  }
  const response = await client.query(query).toPromise();
  console.log("response", response);
  const returnedModel = [];
  for (const [key, value] of stakesMap.entries()) {
    let foundData = _.find(response.data.stakePerDays, function (item) {
      if (item.id === key.toString()) {
        return true;
      }
    });
    if (foundData !== undefined) returnedModel.push(foundData);
    else returnedModel.push(stakesMap.get(key));
  }
  return returnedModel;
};

const fetchStakesPerHour = async (startDate, endDate) => {
  const query = `
query {
    stakePerHours(
        where: { id: 5 },
        orderBy: id, 
        orderDirection: asc
        ) {
          id
          stakeCreatedCount
          stakeCreatedSum
          stakeRemovedCount
          stakeRemovedSum
        }
      }
     `;

  const client = createClient({
    url: URL,
  });

  let stakesMap = new Map();
  for (let i = convertToDayId(startDate); i <= convertToDayId(endDate); i++) {
    stakesMap.set(i, {
      id: i,
      stakeCreatedCount: 0,
      stakeCreatedSum: 0,
      stakeRemovedCount: 0,
      stakeRemovedSum: 0,
    });
  }
  const response = await client.query(query).toPromise();
  console.log("response", response);
  const returnedModel = [];
  for (const [key, value] of stakesMap.entries()) {
    let foundData = _.find(response.data.stakePerDays, function (item) {
      if (item.id === key.toString()) {
        return true;
      }
    });
    if (foundData !== undefined) returnedModel.push(foundData);
    else returnedModel.push(stakesMap.get(key));
  }
  return returnedModel;
};

export const DataModel = types.model("DataModel", {
  dayId: types.optional(types.string, "Not Available"),
  stakeCreatedCount: types.optional(types.string, "Not Available"),
  stakeCreatedSum: types.optional(types.string, "Not Available"),
  stakeRemovedCount: types.optional(types.string, "Not Available"),
  stakeRemovedSum: types.optional(types.string, "Not Available"),
  totalStake: types.optional(types.string, "Not Available"),
});

export const DataStore = types
  .model("DataStore", {
    startDate: new Date().setDate(new Date().getDate() - 60),
    endDate: new Date(),
    stakesPerDayData: types.array(DataModel),
    stakesPerHourData: types.array(DataModel),
  })
  .actions((store) => ({
    setStakesPerDayData(newData) {
      store.stakesPerDayData = newData;
    },
    setStakesPerHourData(newData) {
      store.stakesPerHourData = newData;
    },
    setPeriod(startDate, endDate) {
      store.startDate = startDate;
      store.endDate = endDate;
      store.fetchStakesPerDayData();
      store.fetchStakesPerHourData();
    },
    async fetchStakesPerDayData(_startDate, _endDate) {
      if(_startDate) store.startDate = _startDate
      if(_endDate) store.endDate = _endDate
      const data = await fetchStakesPerDay(store.startDate, store.endDate);
      const newData = data.map((d) => ({
        dayId: d.id.toString(),
        stakeCreatedCount: d.stakeCreatedCount.toString(),
        stakeCreatedSum: d.stakeCreatedSum.toString(),
        stakeRemovedCount: d.stakeRemovedCount.toString(),
        stakeRemovedSum: d.stakeRemovedSum.toString(),
        totalStake: d.totalStake.toString(),
      }));
      store.setStakesPerDayData(newData);
    },
    async fetchStakesPerHourData() {
      const data = await fetchStakesPerHour(store.startDate, store.endDate);
      const newData = data.map((d) => ({
        dayId: d.id.toString(),
        stakeCreatedCount: d.stakeCreatedCount.toString(),
        stakeCreatedSum: d.stakeCreatedSum.toString(),
        stakeRemovedCount: d.stakeRemovedCount.toString(),
        stakeRemovedSum: d.stakeRemovedSum.toString(),
      }));
      store.setStakesPerHourData(newData);
    },
  }));

let _dataStore;
export const useStore = () => {
  if (!_dataStore) {
    _dataStore = DataStore.create({
      stakesPerDayData: [],
      stakesPerHourData: [],
    });
  }
  return _dataStore;
};
