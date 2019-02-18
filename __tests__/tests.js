const pair = require('../script/components/pair');
const finalArray = require('../script/components/finalArray');
const taskAll = require('../script/components/taskAll');
const taskChecked = require('../script/components/taskChecked');

describe('component of scrippt', () => {
    test('pair was called', () => {
        const mockFn = jest.fn().mockName(pair);
        mockFn();
        expect(mockFn).toHaveBeenCalled();
    });
    
    test('check length of pair', () => {
        expect(pair).toHaveLength(146);
    });

    test('pair returns', () => {
        const mockFn = jest.fn().mockName(pair);
        mockFn();
        expect(mockFn).toHaveReturned();
    });

    test('finalArray  was called', () => {
        const mockFn = jest.fn().mockName(finalArray);
        mockFn();
        expect(mockFn).toHaveBeenCalled();
    });

    test('check length of finalArray', () => {
        expect(finalArray).toHaveLength(146);
    });

    test('finalArray returns', () => {
        const mockFn = jest.fn().mockName(finalArray);
        mockFn();
        expect(mockFn).toHaveReturned();
    });

    test('finalArray has my desired features', () => {
        expect(finalArray[145]).toHaveProperty('nameMentor');
        expect(finalArray[145]).toHaveProperty('github');
        expect(finalArray[145]).toHaveProperty('nameStudents');
    });

    const objFinalArray = {
        'nameMentor': 'Yuliya Samuilik',
        'github': 'yulia9',
        'nameStudents': {
            'prometei299': [
                {
                    'Code Jam "CV"': 'Checked',
                    'Presentation': 'Checked',
                    'Code Jam "CoreJS"': 'Checked',
                    'Code Jam "DOM, DOM Events"': 'Checked',
                    'Markup #1': 'Checked',
                    'RS Activist': 'In Progress',
                    'YouTube': 'Checked',
                    'Code Jam "Scoreboard"': 'Checking',
                    'Game': 'In Progress',
                    'Course work': 'ToDo',
                },
            ],
            'sergeypunko': [
                {
                    'Code Jam "CV"': 'time is over',
                    'Presentation': 'time is over',
                    'Code Jam "CoreJS"': 'time is over',
                    'Code Jam "DOM, DOM Events"': 'time is over',
                    'Markup #1': 'Checking',
                    'RS Activist': 'In Progress',
                    'YouTube': 'Checking',
                    'Code Jam "Scoreboard"': 'Checking',
                    'Game': 'In Progress',
                    'Course work': 'ToDo',
                },
            ],            
        },
    };

    test('finalArray has my desired features', () => {
        expect(finalArray[145]).toMatchObject(objFinalArray);
    });    

    test('taskAll was called', () => {
        const mockFn = jest.fn().mockName(taskAll);
        mockFn();
        expect(mockFn).toHaveBeenCalled();
    });    

    test('check length of taskAll', () => {
        expect(taskAll).toHaveLength(1);
    });

    test('taskAll returns', () => {
        const mockFn = jest.fn().mockName(taskAll);
        mockFn();
        expect(mockFn).toHaveReturned();
    });

    test('taskAll has my desired features', () => {
        expect(taskAll[0]).toHaveProperty('Code Jam "CV"', 'time is over');
        expect(taskAll[0]).toHaveProperty('Code Jam "CoreJS"', 'time is over'); 
        expect(taskAll[0]).toHaveProperty('Presentation', 'time is over');
        expect(taskAll[0]).toHaveProperty('Code Jam "DOM, DOM Events"', 'time is over');        
        expect(taskAll[0]).toHaveProperty('Markup #1', 'Checking');
        expect(taskAll[0]).toHaveProperty('RS Activist', 'In Progress'); 
        expect(taskAll[0]).toHaveProperty('YouTube', 'Checking');
        expect(taskAll[0]).toHaveProperty('Code Jam "Scoreboard"', 'Checking');
        expect(taskAll[0]).toHaveProperty('Game', 'In Progress');
        expect(taskAll[0]).toHaveProperty('Course work', 'ToDo');
    });

    test('taskChecked was called', () => {
        const mockFn = jest.fn().mockName(taskChecked);
        mockFn();
        expect(mockFn).toHaveBeenCalled();
    });

    test('taskChecked returns', () => {
        const mockFn = jest.fn().mockName(taskChecked);
        mockFn();
        expect(mockFn).toHaveReturned();
    });
});
