driverId = 0;
passengerId = 0;
tripID = 0

let store = { drivers: [], passengers: [], trips: [] };

class Driver {
    constructor(name) {
        this.name = name;
        this.id = ++driverId;
    
    store.drivers.push(this);
    }

    trips() {
        return store.trips.filter(
            function(trip) {
                return trip.driverId === this.id;
            }.bind(this)
        );
    }

    passengers() {
        return this.trips().map(trip => {
          return trip.passenger();
        });
      }
    
}

class Passenger {
    constructor(name) {
        this.name = name;
        this.id = ++passengerId;

        store.passengers.push(this);
    }
    trips() {
        return store.trips.filter(
            function(trip) {
                return trip.passengerId === this.id;
            }.bind(this)
        );
    }

    drivers() {
        return this.trips().map(trip => {
          return trip.driver();
        });
      }
}

class Trip {
    constructor(driver, passenger) {
        this.id = ++tripID;
        this.driverId = driver.id;
        this.passengerId = passenger.id;

        store.trips.push(this);
    }
    passenger() {
        return store.passengers.find(
            function(passenger) {
                return passenger.id === this.passengerId;
            }.bind(this)
        );
    }

    driver() {
        return store.drivers.find(
            function(driver) {
                return driver.id === this.driverId;
            }.bind(this)
        );
    }
}