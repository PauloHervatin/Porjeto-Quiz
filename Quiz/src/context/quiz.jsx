import { useReducer } from "react";
import { createContext } from "react";
import questions from '../data/questions'

const STAGES = ["Start", "Playing", "End"];

const initialstate = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
};

const quizReducer = (state, action) => {
    console.log(state, action);

    switch (action.type) {
        case "CHANGE_STATE":
            return {
                ... state,
                gameStage: STAGES[1],
            };

        case "REORDER_QUESTION":
            const reorderedQuestions = questions.sort(()=> {
                return Math.random() - 0.5;
            });

            return {
                ...state,
                questions: reorderedQuestions,
            };

        default: 
            return state;
    }
}

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialstate);

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
