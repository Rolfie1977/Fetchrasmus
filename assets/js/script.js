const busTidArr = [];

const busTid = () => {
	const endPoint =
		"https://xmlopen.rejseplanen.dk/bin/rest.exe/multiDepartureBoard?id1=851400602&id2=8519734&format=json";

	fetch(endPoint)
		.then((response) => {
			return response.json();
		})

		.then((data) => {
			busTidArr.push(...data.MultiDepartureBoard.Departure);
		})

		.catch((error) => {
			console.error(error);
		})

		.finally(() => {
			console.log(busTidArr);
			renderContent();
		});
};

busTid();

const renderContent = () => {
	busTidArr.map((data) => busTable(data));
};


const busTable = (data) => {

    //destruction
	const { name, direction, finalStop, type, time, stop, date, line, messages } =
		data;

	document.getElementById("tableContainer").innerHTML += `${name} ${time} ${direction}
    `;
};
