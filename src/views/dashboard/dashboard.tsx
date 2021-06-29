import { Container, Main, PageLayout, TitleDecoration } from "components";
import { ViewSidebar, ViewHeader } from "views/components";

const Dashboard = () => (
	<PageLayout>
		<ViewHeader title="Dashboard" />
		<Container>
			<ViewSidebar />
			<Main>
				<TitleDecoration>
					<h2 data-testid="dashboard__title">Secret Dashboard</h2>
				</TitleDecoration>
			</Main>
		</Container>
	</PageLayout>
);

export default Dashboard;
