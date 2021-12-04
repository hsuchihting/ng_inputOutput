# ng_inputOutput 練習

## 情境

因專案需求，需要將一個共用元件 `last` 給其他頁面使用，目前此功能只有單一頁面再使用，其裡面已經寫好固定邏輯，是用 D3 繪圖，故要從外部將資料傳到 `last`。
所以 SA 請我在此共用元件的外層再建立一個共用元件 `middle` 作為傳遞的元件，此元件最重要的目的是要把所有的資料都傳到 `last` 的元件。

## 問題
單純 `input` 我會實作，但 `middle` 這個我目前的想法是把 `app` 中的資料 `@Input` 傳給 `middle`，然後再把接到的資料經過整理後，再 `@Output` 傳給 `last`，但我發射出去的，想請問的是在同個元件中可以同時使用 @Input 跟 @Output 嗎?

## Data 資料
使用 `db.json` 呈現。
