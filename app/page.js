'use client'
import Image from "next/image";
import 'survey-core/defaultV2.min.css';
import {Model, model} from "survey-core"
import {Survey} from "survey-react-ui"

import styles from "./page.module.css";

const json ={
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "title": "#1",
      "elements": [
        {
          "type": "radiogroup",
          "name": "question1",
          "title": "Для чего нужен сайт?",
          "choices": [
            {
              "value": "Item 1",
              "text": "Онлайн-представительство (Виртуальный офис)"
            },
            {
              "value": "Item 2",
              "text": "Увеличение доходов (Новый канал доходов)"
            },
            {
              "value": "Item 3",
              "text": "Повышение доверия и авторитета"
            }
          ]
        }
      ]
    },
    {
      "name": "page3",
      "title": "#2",
      "elements": [
        {
          "type": "radiogroup",
          "name": "question4",
          "title": "Какой нужен сайт?",
          "choices": [
            {
              "value": "Item 1",
              "text": "Интернет-магазин"
            },
            {
              "value": "Item 2",
              "text": "Одностраничник"
            },
            {
              "value": "Item 3",
              "text": "Корпоративный сайт"
            }
          ]
        }
      ]
    },
    {
      "name": "page4",
      "title": "#3",
      "elements": [
        {
          "type": "radiogroup",
          "name": "question3",
          "title": "Как скоро нужен сайт?",
          "choices": [
            {
              "value": "Item 1",
              "text": "\"Срочно (до 1 месяца)"
            },
            {
              "value": "Item 2",
              "text": "В ближайшее время (1-3 месяца)"
            },
            {
              "value": "Item 3",
              "text": "Нет спешки (3-6 месяцев)"
            }
          ]
        }
      ]
    },
    {
      "name": "page2",
      "title": "#4",
      "elements": [
        {
          "type": "radiogroup",
          "name": "question2",
          "title": "На какой бюджет рассчитываете?",
          "choices": [
            {
              "value": "Item 1",
              "text": "от 10 000 руб до 30 000 руб"
            },
            {
              "value": "Item 2",
              "text": "от 30 000 руб до 50 000 руб"
            },
            {
              "value": "Item 3",
              "text": "от 50 000 руб и выше"
            }
          ]
        }
      ]
    },
    {
      "name": "page5",
      "title": "#5",
      "elements": [
        {
          "type": "text",
          "name": "question5",
          "title": "Какая специфика вашего бизнеса?",
          "textUpdateMode": "onBlur"
        }
      ]
    }
  ]
  };
export default function Home() {
  const model = new Model(json)
  return <Survey model={model}/>
}
