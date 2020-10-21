import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: "searchPipe",
})
export class SearchPipePipe implements PipeTransform {
  transform(user: any, searchValue: string): any {
    if (searchValue === undefined) {
      return user;
    }
    return user.filter((item) => {
      return item.name.indexOf(searchValue) > -1 ? user : "";
      // return item.name.startsWith(searchValue.toLocaleLowerCase()) == true;
    });
  }
}
