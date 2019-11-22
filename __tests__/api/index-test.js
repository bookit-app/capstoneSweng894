import apis from '../../src/api'

describe('insert profile', () => {
    it('should trigger an profile post require', () => {
        apis.insertProfile({}, '')
            .then( response => {
                expect(response).toEqual({
                    data: {},
                });
            });
    })
})

describe('get profile by id', () => {
    it('should trigger a get require for profile by id', () => {
        apis.getProfileById('', '')
            .then( response => {
                expect(response).toEqual({
                    data: {},
                });
            });
    })
})

describe('get configuration by id', () => {
    it('should trigger a get require for configuration by id', () => {
        apis.getConfiguration('', '')
            .then( response => {
                expect(response).toEqual({
                    data: {},
                });
            });
    })
})

describe('update profile by id', () => {
    it('should trigger a update require for profile by id', () => {
        apis.updateProfileById('', '')
            .then( response => {
                expect(response).toEqual({
                    data: {},
                });
            });
    })
})

describe('delete profile by id', () => {
    it('should trigger a require to deleted profile by id', () => {
        apis.deletedProfileById('', '')
            .then( response => {
                expect(response).toEqual({
                    data: {},
                });
            });
    })
})

describe('get providers by filter', () => {
    it('should trigger a require to get proivders by filter', () => {
        apis.searchProviderByFilter({}, '')
            .then( response => {
                expect(response).toEqual({
                    data: {},
                });
            });
    })
})

describe('get providers details', () => {
    it('should trigger a require to get proivders details', () => {
        apis.getProviderDetails('', '')
            .then( response => {
                expect(response).toEqual({
                    data: {},
                });
            });
    })
})

describe('insert appointments', () => {
    it('should trigger an appointment post require', () => {
        apis.insertAppointments({}, '')
            .then( response => {
                expect(response).toEqual({
                    data: {},
                });
            });
    })
})

describe('update appointment by id', () => {
    it('should trigger an update to appointment by id', () => {
        apis.updateAppointmentById({}, '', '')
            .then( response => {
                expect(response).toEqual({
                    data: {},
                });
            });
    })
})

describe('get appointments by filter', () => {
    it('should trigger a require to get appointments by filter', () => {
        apis.searchAppointmentByFilter({}, '')
            .then( response => {
                expect(response).toEqual({
                    data: {},
                });
            });
    })
})

describe('get appointment details by id', () => {
    it('should trigger a request to get appointment details', () => {
        apis.getAppointmentById({}, '', '')
            .then( response => {
                expect(response).toEqual({
                    data: {},
                });
            });
    })
})

describe('delete appointment by id', () => {
    it('should trigger a require to deleted appointment by id', () => {
        apis.deleteAppointmentById('', '')
            .then( response => {
                expect(response).toEqual({
                    data: {},
                });
            });
    })
})


