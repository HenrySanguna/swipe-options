# swipe-options

Library that allows shifting elements of a list to the right or left to display multiple options to execute for each element.

## Installation

You can install this library via npm. Make sure you have Node.js installed on your system before running the following command:

```bash
npm install swipe-options
```

## Important

It's necessary to install animejs for the proper functioning of this library.

```bash
npm install animejs@3.2.2
```

## Features

  * Shift an element of a list on both sides through animation.
  * Display multiple options related to the shifted item (it is recommended to use a maximum of 4 options per side).
  * Customizable content through a template.

<p align="center">
  <img src="https://github.com/HenrySanguna/swipe-options/assets/60330730/4d1ece32-bca3-44d2-b990-907588d84e2a" alt="GIF Swipe Options">
</p>


## Usage

  * Options structure

    ```typescript
    options: any =
    {
      optionsLeft: [{
        name: "Editar",
        icon: "bx bx-edit",
        background: "success",
        action: () => {
        }
      },
      {
        name: "Editar",
        icon: "bx bx-edit",
        background: "info",
        action: () => { }
      },
      {
        name: "Editar",
        icon: "bx bx-edit",
        background: "primary",
        action: () => { }
      },
      {
        name: "Editar",
        icon: "bx bx-edit",
        background: "secondary",
        action: () => { }
      }],
      optionsRight: [{
        name: "Editar",
        icon: "bx bx-edit",
        background: "danger",
        action: () => { }
      },
      {
        name: "Editar",
        icon: "bx bx-edit",
        background: "warning",
        action: () => { }
      }]
    };
    ```
    * Data structure to display in the template

      ```typescript
      data: any[] = [{
      id: 1,
      name: "Chris Evans",
      description: "Captain America"
      },
      {
      id: 2,
      name: "Scarlett Johansson",
      description: "Black Widow"
      },
      {
      id: 3,
      name: "Chris Hemsworth",
      description: "Thora"
      },
      {
      id: 4,
      name: "Brie Larson",
      description: "Captain Marvel"
      }
      ```

    * Example of a template per list item
   
      ```html
      <ng-template #templateData let-item="item">
      <div class="list-content">
      <div class="profile">
      <h3>{{item.name}}</h3>
      </div>
      <div class="subtitle">
      <h4>{{item.description}}</h4>
      </div>
      <div class="subtitle">
      <h4>{{item.description}}</h4>
      </div>
      <div class="subtitle">
      <h4>{{item.description}}</h4>
      </div>
      </div>
      </ng-template>
      <lib-swiper-options [options]="options" [data]="data" [templateData]="templateData"></lib-swiper-options>
      ```

  ## Contribution
    If you encounter any issues or have any suggestions for improving this library, feel free to open an issue or submit a pull request.

  ## License
    This project is licensed under the MIT License.