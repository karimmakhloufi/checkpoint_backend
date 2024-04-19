import Country from "../entity/country";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

Resolver(Country);
class CountryResolver {
  @Query(() => [Country])
  async getAllCountries() {
    return await Country.find();
  }

  @Query(() => Country)
  async getCountryByCode(@Arg("code") code: string) {
    const result = await Country.findOneByOrFail({ code });
    console.log(result);
    return result;
  }

  @Query(() => [Country])
  async getCountriesByContinent(@Arg("continent") continent: string) {
    const result = await Country.find({
      where: {
        continent,
      },
    });
    console.log(result);
    return result;
  }

  @Mutation(() => Country)
  async createNewCountry(
    @Arg("code") code: string,
    @Arg("flag") flag: string,
    @Arg("name") name: string,
    @Arg("continent") continent: string
  ) {
    const result = await Country.save({ code, name, flag, continent });
    return result;
  }
}
export default CountryResolver;
