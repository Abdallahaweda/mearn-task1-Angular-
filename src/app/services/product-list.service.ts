import { Injectable } from '@angular/core';
import { product } from '../DataTypes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor() { }
  products:product[]=[
    new product('1',"HP",20000,'data:image/jpeg;base64,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',3),
    new product('1',"HP",20000,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8u6PBj1wIXosTGz7s4kvMi09i0bXKDEr1rw&usqp=CAU',2),
    new product('1',"HP",20000,'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUREhIREhYRGBgSERIZEhISEhIREhISGBgZGhkYGRgcIC4lHB4rHxgZNDgmKy8xOjU1GiRIQjs0Py40NTEBDAwMEA8QHxIRHzsrJCc/NT88Pzo9Pz88Nj86Pz8/PT8xPzQ/PT82NDo3NEA6OzE0MTQ3MTU/NkA0ND49PzY0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwEEBQYIAgP/xABLEAABAwICAwoICggGAwAAAAABAAIDBBESIQUxQQYHE1FTVGGR0dIVFyIycYGSkxQ1UnJzdIKhsbMzNkKio7LC0xYjQ2Li8CVjwf/EABgBAQADAQAAAAAAAAAAAAAAAAABAwQC/8QAIREBAQACAQQCAwAAAAAAAAAAAAECAxESISIxQVGBodH/2gAMAwEAAhEDEQA/AJmREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREEdb7e6Cakip4IHOY6pMpfIwlrwyMNBa1wzbcyNzGfk9Khx2kJSbmSQk6yZHEn0lSXv4/pNH/Mq/xgXjcrvaU1bRU1VJNVtfNHic2N0IaDciwxRk2y2lBGp0jLykntuVDpGblJPbd2qYTvO0nOK32qf+2qeJuj5xW+1T/20EPeE5uUk9tyeE5uVk9tymDxN0fOK32qf+2nibo+cVvtQf20EP8AhOblZfbd2qnhKblZfeO7VMHibpOcVvtQf21XxN0nOK32oP7aCHfCc3Ky+8f2qh0nNysvvH9qmLxNUnOKzrg7ip4mqTnFZ1wdxBD3hSblZPbd2qvhOblJPeOUweJmk5xWdcHcTxNUnOKzrg7iCH/Ck3KSe27tTwrPysntu7VMHiapOcVnXB3E8TVLzis/gdxBEPhOblJPbcvQ0pNyj/aKlzxNUvOKv+B3FXxOUvOaz+B3EESDSUvKP9or0NIy/Lk9oqWfE5S85q/4HcVfE7Tc5q/4HcQaRuM3TVEFXAOFkcySWJj43SOcwtc8MJwm4BAdcEWN2jO1wug1zhVaObR6X+Csc97Yauna1z8ONwJjfnhAH7R2bF0egIiICIiAiIgIiICIiCId/H9Jo/5lX/NAt33tvimh+gH8zlpG/l+k0f8AMrP5oFu+9t8U0P0A/mcg2dEVCgIvhPVMjYZHua1o1uJAaM7a/SvNPWxyfo3xv+Y9rvwKcXhHMXSKiqiRERAREQFRFVAVFVEBFREHPu6s23QTfXKY/uwroNc97rvj+f63TflxLoRAREQEREBERAREQEREEQ7+fn6P+ZV/jAt23tvimh+gH8zlpG/p5+j/AJlX+MC3fe1+KaH6AfzOQbHI8NaXOIAaCSTkABmStB0vpyWqfwURcxjnBrGglrpCTYFx1gG/m9azm7aqLYWRj/Vf5XzG5n78Kwe5Gj4SpxHzYW4vtnJv9R+ytenDGa7sy/DLtytzmGK83WPbDFT0bNTWhztl2tGFt/ScR9LVqzTYgi4I1OBsQegjUt3gdBWuqJJIWYYiWicvJL2tubiwGGwsdZ85YvQVDEKaeqnaHNF8AdlcNHRtJIHqVurZMMLLO8/dqvZhcsuZe38XW5zdE5zmwVBviyZIdd9jXcd9h61uK0mupoHUHwjgWxPfh4MNeSbl1mm+V7i51altGhaozU8Uh1uYMXzhk77wVl2yXzk4+F+q2eNvLIIsVp3R0lTG1kNRLTOa8OMkTWOc4AOGEh2y5B9QWgVUVazSVNo+n0hVTOFpawuZCGQU4INjYXLncX+5vHlSvSoi0nfHrp4m6Pjp5nwmq0hDDI+MNL8D7g2uDn2KwrzVaKq9HtFZUVMdZU8DJDUhjnNxW8trwARhvqQSKi1/Te66kopBDNI7hHNxCKOOSZ4b8ohjThHpV5ozTlPVQfCYJWOiAcXSZtDMIucQdYtsNd7IMoi1Ok3wNHyyMjZMf8x5ZHI6GZkT33tZr3NDdfSrKoq5BujhhEknBnRRcYsbuDL+FeMRZe17AZ22IN5RYvR+m4KmWeCF+N1M4NmwtfhY838nHbC45G4BNrZrKIOet2R/8/P9apvy4l0Kued2vx/P9apfy4l0MgIiICIiAiIgIiICIiCIN/Tz9H/Mq/xgW7723xTQ/Qf1OWkb+nn6P+ZV/jAt33tvimh+g/qcgt93rDanfsDpGn0uDSP5SvlQn4Jo582p898J2jF5LD6m3d61sWm9HiphdFkCc2O4nDV6th6CVoNdXzPwwzWHAOFoy1oDXAWAIAzFvuPSterzwmH1e7Js8M7l9zszlYw0ujo4Gjy6ggFv7V3+U4dVm+sL7acpyyGloI73kcwOcASLNIu4/aN/slWOhJJK2qjdMcQp2ucPJa0A3GEZbcVj9hU0pukmE0gicAxri1owNdfDkTcjaQVPRn1dM9zvUdePTzfV7R9N2U4aYaZmTY2hxA1DLC0eoA9a2Dcowto4Qdoc71Oe5w+4haVR00ldPYkkvIMr7DyWar8QyFgOwqSYYwxoa0WDQABxACwC538Y4TD5911p5yyufwxe6rTrNH0ktVJY4BZjL5ySuyYwek6+IAnYsXuA0E+mgfUVN3VVa/hapztbS7NsY4g0HVsJOyyy26Lc9T6RjZFUtc5rJA9oa97CHhrmg3aRscVhI97XR7XNeGT3a4OBNVOfKBuDm7jWVqWG+vAJBoqMl4Emladpcwlrmh1xdpGp2eRWN3Q6Gboqs0ZVxTVEz5KxlOY6uQVJ4KUWe6MuGJjhlmPlDZcHfN0G56n0gyNlS1zhHIHswvfGWvAIBu0g7Vj9GbhaGmmbUMje6Rn6N80ssxZ0gPcQD02yQYjcgL6b06X2xg0YZfzuDwO1dFgz7lqtUXik3VCC2AVTMIHmgl9qi32VI+mtyFNVyioeJWShmAzU8z4JHM+SS05j0q50XudpqWndSRRNET8fCMdd/C4xZxeXXLrjLPYANQQaXu7ZF/hlmDDhEFAYLW14osx04S/rKxm7BladKsFGQKg6DF73EhHCPxhjtQfrsT+Nitxpd7yhjexwbM5sTw+KCSolkgjeDcFrHG23bdZt+hIXVja8tdwzYDE12J2Hg8RdbDqvdxzQYje7fSGhYKIOa1rnCZkn6dtRlj4U7X6s+K1rCwG1rE0GgYKepnqog5r6rDw4DnYHlup2DUHa8xxnjWWQc8buP1gn+s0n5cS6HXPG7v8AWCf6xR/lQrodAREQEREBERAREQEREEQ7+nn6O+ZWfjTrdt7b4oofoP6nLSd/Xz9HfNrPxp1u29r8UUP0P9TkGzrFaW0JFU5uBDgLNkbYOA4jsI6CsqimWy8xGWMynFYDRehXUsU7WOa6SS+B5Ba0WbZgOvUST61iqTcY644WRoA1iMEuP2nauordEXc3Zy2y+1d1Y3iWelnQaPjp2YI2gDWTrc48ZOslXiIq7bbzVkknaKoiIkRUVUFFVUVUBERARUVUHPO779YJvrFH+VCuhlzxvgfrDN9YovyoF0OgIiICIiAiIgIiICIiCId/Xz9HfNrPxp1u29r8UUP0P9TlpW/o04tHnYG1g9Z4DsPUopFZI0BrZJWgamtle1o9ABsEHWaLko6Qm5af30neVDpGblp/fSdqDrZFyP4Rm5af30naqeEJuWm97J2oOuUXI3hGblp/eydqeEZeWm97J2oOuUXIvhCXlpvev7Vk9D1gcX8PPILYcIdPM1paQ4OILTcuBwEDaL60HU6LkV2kJbm009rm15Hg22XF9ap4Ql5Wb3r+1B12i5E8IS8rN71/aqeEJeVm96/tQdeIuRPh8vKze9f2p8Pl5Wb3r+1B12i5E+HS8rL71/aq/DpOVl96/tQbnvhfrBN9YofyoF0OuTNHvL54XEucTPDdziXE+W0C5K6zQEREBERAREQEREBEWA3WaY+CwHCf8yS7Y/8Abl5T/Q0HrIQR7vx6XjmEVOxpLoZnEy4gA04S17A23lZkXNxYt2qLmRB2WMgnUCLkrY90r7sBN8ideZJP/wBWsMaCCSW3Owutn6LG46kGRw0wDRhqHuw+WW1cLBcayGmE2GvabcatZ42Of/lh7W4fNfKyV1xe5xBjctWzK2tW7rCwFy24v5tybZ2dbVrsqudhxBpFn2vazzbWBisMwbXsBqQe+CHyjqv5zNXHqVTTWOEl4NgcJwg2Oo2t0rw9wbfBljZZwuHkXOYJLRY5DVx68yqNIbZzMIJa5uG4e7Npa42LbAG54yL9F0H1fTYSQ4uBaBiDi0FoNrXFstYVGQA6nOOrIFp15DZxr5xuDcDm2a5jtvlEm9w4NLcIA4ic/wAKNHHhBZd133OLVZoGEi+vXkb59IfcUvlYbvuCAW5XBOoWtrX0iog9xaDJiBthtc3zysBryPUrbgwcTXYBmDiPmMB2EMB13GrV+HsyOeHYySJCLknCwPH7RaBY2QVbTtOQc85gZEHyjqGrWqtpQ42BeTiw2GZxcWrWkr8QcW6nBrHRxh4bZtg0k/t3Ivnnc3XuY4HEOydGxsb42CSN0rALnEXNBGy4cBqFhYIPEdKH5NL3HPJvlZi19nSF44Btr4nWva9xa/FqXtsg8gAtbgYbYMeOUOdcsc4DI2JF9WvWvOG7W3AYHOeWyESOv/s6bW1gIPTKMOa54Mha3znAXa30m2WtU+B3YXt4Qtbe7rXYLWvc2sNY6183sJD3AODBJtGLA7PCC61r2Pr4l6jGbsJDLtbiL9ZttacPHnYbDtQXFPDGWB7o5y0ZPlZO0R4sgcuDOHMjK51heX0rX+XGJGsAze53CNxA5+UGtA1jIq0kdisTm4CxJt92WWtIn4T87K9wLHjORyQXmiZhFUwS4eEEU8b8DnFrX4XAgEgG2YGxdLaD0zHWRcJHcEG0kZIxMdxHjB2Hb1hcxQODJA64w3F7EnCL68wL225KQtAaafSStlZmMg9l7NkZtb6eI7D0XBCcUVno6uZUxMmiOJjxcHaDqII2EG4I6FeICIiAiIgIiIPlPM1jHSOIDWNLnOOprQLkn1KGdP6YdVzvlNw3zY2H9hg1D0nMnpPQFs2+Np/MUUZ1YXVBB262M/Bx+z0qPXPQWGmoXymNkYxZ5NBAc55yGvK2v/oWNn0bUC4wvaADkZY3CwOep1tmroCydc64WEfGL6h1IPm4AhtmkEA4nYg7Edht+yrqngsyRrrEvaMGGshjY1wvYyMIOOxOQu22fHl8EQeWXbitfMEAtcW5HjtrFtYX2hoZHBr2YRxHhY43Ag9LgR6V81cNNgPR96Ch0XIdfB58c8F7+0qu0ZK4kkxknWXVEJJ9ZcvWNUMiCjtHSm2J0ZwtAbiqYnYWC9mi78gLnIcaeDpbBuKKwNw01MVgeO2LWvXCJwiDyNHSAOAfCA62ICpiDXW1XAdYry+jfGMbjE5p8lzWTRucb3tcMde2X4L3wnSvnO+49BQWzWOu2xDTfJxNrXyvfoVzV0zCLx8G0BubTOJS5w4vIbb0L4KjkFJHFxuRmfOJdcuO0m6o1ztRLi02u3Ha9vu2DZsVUQeGt4x6r2Xt4BtZpGWfl3z40RB7gY99m2c4jzfKu0cdh1dSztAx7GYZBYDzNdw35J2ZbOj0LE0utZRj0G37j905opcLyTDI4cI0Z4DqEjR0bRtHSApkjeHNDmkEOALXAggg5gg7Qubw9b9vdbq+Dc2ind5Dzane4+Y8n9GT8kk5cRy2iwSsiIgIiIC8PvY2textfVfZde0QQDW0soke2dzRLicZMWPE5xJxO83UTdWz6YjW9nq4QnqwqedIaLgqW4KiKKVuwSMa+3ouMvUsC/e70Y43+CsHzZJmDqa8BBDctLi/bYPsy9xWx0MTnwsfrEgPUQps8XGi+bD31T30O9zovmo99Ud9BCPgM8tF+/2KvgT/AN0XU5Tb4udF81Hvajvp4udF81HvajvoIRGhgM+GhNthDsJ6Cb6lcGB5zvo8e+7VM/i50XzUe9qO+ni50XzVvvZ++ghYwP49H9c6cC/5Wj+uZTT4utF81b7yfvqvi60XzVvvJ++ghTgX3vjoNnLWyv0dKqYH/Lof4vYpr8XmjOas95N308XmjOas9ubvIIS4F/y6Hql7E4B2YL6KxBBsJL2I2XU2+L3RnNWe3N3lXxe6M5pH7cveQQT4Jby8fsjvKh0Q3l4/YHfU7+L7RnNY/ak7yr4vtGc0i9qTvIIG8Dt5eP2B308EN5eP2B31PPi/0ZzSLrf3lTxfaM5pD+/3kED+CG8uz2f+aqNEN5eP2f8Akp48X+jOZwfv9qf4A0ZzODqd2oIMj0a1v+qw/Zt/UvuKZvKM/wC+tTb/AIA0ZzODqd2p/gDRnM4Op3aghT4OPltQU5cQxrmOc82awElzjxADMnoU2DcFowG/wOn9bSR1ErLaO0NT01/g8EEV9ZiiZGT6SBmg+G5hkzaOnFS7FKIxjJBDtZwh18y4NsCTrIKy6IgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIP//Z',1),
    new product('1',"HP",20000,'data:image/jpeg;base64,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',2),
    new product('1',"HP",20000,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbHsZk4V7jN5FWt9tNdUsqmpcBw8Pe_iROag&usqp=CAU',5),
    new product('1',"HP",20000,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0XTF6qgF9t-nXBilfTwPJ_GM0tIysp9krPA&usqp=CAU',4),
  ]
}